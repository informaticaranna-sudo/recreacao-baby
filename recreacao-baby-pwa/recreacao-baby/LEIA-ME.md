# Recreação Baby — PWA com Firebase

## 1. Criar o projeto no Firebase (uma vez)
1. https://console.firebase.google.com → **Adicionar projeto**.
2. **Visão geral → </> (Web)** → registre o app → copie o `firebaseConfig` e cole em `firebase-config.js`.
3. **Authentication → Sign-in method** → ative **Anônimo**.
4. **Firestore Database → Criar banco** (região `southamerica-east1`) → aba **Regras** → cole o conteúdo de `firestore.rules` → **Publicar**.

## 2. Publicar (Firebase Hosting, HTTPS grátis — o Chrome exige HTTPS para instalar)
```
npm install -g firebase-tools
firebase login
firebase use --add      # escolha o projeto
firebase deploy
```
Ao final, o terminal mostra o endereço (https://SEU-PROJETO.web.app).

## 3. Instalar
- **PC (Chrome):** abra o endereço → ícone de instalar na barra de endereços, ou o botão **📲 Instalar**.
- **Celular (Chrome):** abra o endereço → botão **📲 Instalar o app**, ou menu ⋮ → **Instalar app**.

## 4. Primeiro acesso
Na tela de login, **Criar conta da direção** (código de autorização da escola). Depois cadastre os alunos: cada matrícula (ex.: 2026-0001) é salva no Firestore, coleção `alunos`, e funciona em qualquer aparelho.

## Atualizar o app depois
Edite os arquivos, aumente `V` em `sw.js` (ex.: `rb-v2`) e rode `firebase deploy`.

## Segurança — leia
O login do app (matrícula = senha dos responsáveis) é verificado no próprio aparelho. As regras exigem apenas um login anônimo, então quem abrir o site consegue, tecnicamente, ler o banco. Para dados reais de crianças e comprovantes, o ideal é migrar para Firebase Authentication com regras por usuário.
