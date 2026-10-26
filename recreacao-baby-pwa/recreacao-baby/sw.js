const V="rb-v1";
const SHELL=["./","index.html","firebase-config.js","manifest.json","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET")return;
  const same=u.origin===location.origin;
  const cdn=(u.hostname==="www.gstatic.com"&&u.pathname.startsWith("/firebasejs/"))||u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com";
  if(!same&&!cdn)return; // chamadas do Firestore/Auth passam direto
  e.respondWith((async()=>{
    const c=await caches.open(V);
    if(same){
      try{const res=await fetch(r);if(res.ok)c.put(r,res.clone());return res}
      catch(_){return (await c.match(r,{ignoreSearch:true}))||(r.mode==="navigate"?await c.match("index.html"):Response.error())}
    }
    const hit=await c.match(r);if(hit)return hit;
    const res=await fetch(r);if(res.ok||res.type==="opaque")c.put(r,res.clone());return res;
  })());
});
