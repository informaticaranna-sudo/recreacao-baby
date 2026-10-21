# Recreação Baby — arquivos PWA

Este pacote adiciona os arquivos de suporte PWA ao site:
https://informaticaranna-sudo.github.io/recreacao-baby/

## Arquivos incluídos
- `manifest.webmanifest`: nome, cores, URLs e ícones do app.
- `service-worker.js`: cache básico do app shell e fallback offline.
- `icons/icon-192.png` e `icons/icon-512.png`: ícones do app.
- `trecho-para-index.html.txt`: trechos que devem ser inseridos no `index.html`.

## Como instalar no repositório GitHub

1. Abra o repositório `recreacao-baby` no GitHub.
2. Adicione `manifest.webmanifest` na raiz do repositório.
3. Adicione `service-worker.js` na raiz do repositório.
4. Crie a pasta `icons` e coloque dentro os dois arquivos PNG.
5. Abra o `index.html` existente. **Não o substitua por um arquivo novo.**
6. Copie o primeiro trecho de `trecho-para-index.html.txt` para dentro de `<head>`, antes de `</head>`.
7. Copie o segundo trecho para o fim do arquivo, antes de `</body>`.
8. Salve/commite as alterações e espere o GitHub Pages publicar.

## Como adicionar arquivos pela interface do GitHub

Para cada arquivo:
- Entre no repositório e escolha **Add file → Create new file** ou **Upload files**.
- Para criar a pasta, informe um caminho como `icons/icon-192.png` ao criar/upload do arquivo.
- Faça commit das alterações na branch publicada (geralmente `main`).

## Como testar

1. Aguarde a publicação do GitHub Pages.
2. No computador, abra o site no Chrome e use DevTools → Application para verificar Manifest e Service Workers.
3. No Android, abra o link no Chrome, menu ⋮ → **Instalar app** ou **Adicionar à tela inicial**.
4. No iPhone, abra o link no Safari, toque em Compartilhar → **Adicionar à Tela de Início**.

## Observações importantes

- Os caminhos estão configurados para o projeto GitHub Pages `/recreacao-baby/`.
- O service worker armazena a estrutura básica do app, mas não torna automaticamente o login, dados da escola, APIs ou funções online disponíveis sem internet.
- Se o HTML usar caminhos absolutos como `/style.css` ou `/script.js`, eles podem apontar para a raiz do domínio em vez de `/recreacao-baby/`. Verifique os caminhos dos recursos existentes.
- O ícone incluído é um modelo provisório; você pode substituí-lo por um logotipo oficial da escola mantendo os mesmos tamanhos e nomes.
- Após mudar os arquivos do app, aumente `CACHE_VERSION` em `service-worker.js` (por exemplo, `recreacao-baby-v2`) para atualizar o cache.
