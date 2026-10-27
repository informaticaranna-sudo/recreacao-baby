# Recreação Baby — PWA com Firebase

## Configuração no Firebase (uma vez)
1. **firebase-config.js**: cole o `firebaseConfig` do seu app Web.
2. **Authentication → Sign-in method**: ative **E-mail/senha**. O login **Anônimo** não é mais usado (pode deixar desativado).
3. **Firestore Database**: crie o banco (região `southamerica-east1`).
4. Segredo da escola: coleção `config` → documento `escola` → campo `codigo` (*string*) = código de autorização da escola, só números.
5. Aba **Regras** → cole o conteúdo de `firestore.rules` → **Publicar**.

## Publicar
- **GitHub Pages:** envie todos os arquivos (inclusive a pasta `icons`).
- **Firebase Hosting:** `firebase login`, `firebase use --add`, `firebase deploy`.

## Acessos
- **Direção:** e-mail e senha. Primeira vez: **Criar conta da direção** (nome, e-mail, senha e código da escola). “Esqueci a senha” envia o link por e-mail.
- **Responsáveis:** matrícula do aluno nos dois campos (ex.: 2026-0001). A conta é criada automaticamente quando a direção cadastra o aluno. Alunos já cadastrados ganham a conta no primeiro acesso da direção após esta atualização (deixe a página aberta por alguns segundos).
- Cada aluno tem a própria matrícula e o próprio acesso; irmãos entram cada um com a sua.
- Os logins ficam salvos no aparelho; o botão ⎋ sai.

## Instalar
Chrome no PC: ícone de instalar na barra de endereços ou botão **📲 Instalar**. Celular: **📲 Instalar o app** ou menu ⋮ → Instalar app.

## Atualizar o app
Edite os arquivos, aumente `V` em `sw.js` e publique de novo.

## Segurança
- Todo acesso exige login real. Responsáveis leem só os dados do próprio aluno; só anexam comprovante nas mensalidades dele.
- Só a direção grava alunos, agenda, calendário e boletim; o código da escola é conferido no servidor.
- A senha inicial do responsável é a própria matrícula. Se quiser, a direção pode trocá-la pelo console (Authentication → Users).
- Contas antigas (`dir` com `user`/`hash`) não funcionam mais e podem ser apagadas no console.
