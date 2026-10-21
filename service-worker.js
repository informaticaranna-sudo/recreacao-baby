/* Recreação Baby PWA — cache básico do app shell.
   Ao atualizar o site, aumente CACHE_VERSION para invalidar o cache antigo. */
const CACHE_VERSION = "recreacao-baby-v1";
const APP_BASE = "/recreacao-baby/";
const APP_SHELL = [
  APP_BASE,
  APP_BASE + "index.html",
  APP_BASE + "manifest.webmanifest",
  APP_BASE + "icons/icon-192.png",
  APP_BASE + "icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle same-origin GET requests within this GitHub Pages project.
  if (request.method !== "GET" || url.origin !== self.location.origin ||
      !url.pathname.startsWith(APP_BASE)) return;

  // For page navigations, prefer network so login/data stay current; use cached
  // app shell only when offline. This does not cache API requests on other origins.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match(request).then((cached) =>
        cached || caches.match(APP_BASE + "index.html")
      ))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});
