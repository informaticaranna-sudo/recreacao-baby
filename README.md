# 🧸 Recreação Baby — Escola Infantil

Aplicativo web da escola infantil Recreação Baby: agenda diária, calendário de eventos, boletim pedagógico e financeiro em um só lugar. É um site estático (um único `index.html`), pronto para publicar no GitHub Pages.

## Como entrar

O acesso é feito só com a **matrícula**, sem senha:

- **Responsáveis:** usam a matrícula do aluno.
- **Diretoria:** usa o código da escola.

| Perfil | Matrícula | O que vê |
|--------|-----------|----------|
| Diretoria (Tia Rosa) | `DIR-2026` | Acesso completo à escola |
| Responsável (Ana Souza) | `2026-0001` | Alice e Lucas |

Outras matrículas de demonstração: `2026-0002` a `2026-0007`. Responsáveis com mais de um filho (como Ana Souza) enxergam todos eles.

## Funcionalidades

| Página | Diretoria | Responsável |
|--------|-----------|-------------|
| **Início** | Resumo da escola: alunos, mensalidades em aberto e atrasadas, próximos eventos, últimas da agenda | Mesmo resumo, só dos seus filhos |
| **Agenda** | Publica e exclui recados por turma | Lê os recados da escola e das turmas dos filhos |
| **Calendário** | Cria e exclui eventos | Consulta os eventos |
| **Boletim** | Avalia 5 áreas e escreve observações | Consulta o boletim dos filhos |
| **Financeiro** | Marca mensalidades como pagas ou desfaz | Consulta as mensalidades dos filhos |
| **Alunos & Turmas** | Cadastra, edita e exclui alunos | Não aparece |
| **Painel de Turmas** | Visão por turma: alunos, publicações e atrasos | Não aparece |

Turmas: Berçário, Maternal I, Maternal II e Jardim I.

Áreas do boletim: Linguagem, Noções de matemática, Socioemocional, Coordenação motora e Artes e música. Cada uma recebe um conceito: Em início, Em desenvolvimento ou Desenvolvido.

Uma mensalidade é considerada **atrasada** quando não foi paga e o vencimento já passou.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `recreacao-baby`).
2. Envie o `index.html` e este `README.md` para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
6. Aguarde alguns minutos. O site ficará em:
   `https://SEU-USUARIO.github.io/recreacao-baby/`

Para testar sem publicar, basta dar dois cliques no `index.html`.

## Importante: dados e privacidade

O GitHub Pages não tem servidor. Por isso, todos os dados (alunos, agenda, boletins, mensalidades) ficam salvos no **localStorage do navegador** de quem usa o site.

- Os dados **não sincronizam** entre aparelhos: o que a diretoria cadastra no computador não aparece no celular do responsável.
- Limpar os dados do navegador apaga tudo. O botão **Demo** restaura os dados de exemplo.
- O acesso por matrícula **não é um sistema seguro de autenticação**. Qualquer pessoa que souber uma matrícula entra.
- **Não cadastre dados reais de crianças** nesta versão. Para uso de verdade, é preciso conectar o site a um banco de dados online com login (por exemplo, Firebase ou Supabase), respeitando a LGPD.

## Personalização

Tudo está em `index.html`:
- **Cores:** variáveis CSS no início do arquivo (`:root`).
- **Turmas e valores das mensalidades:** `TURMAS` e `VAL`.
- **Áreas e conceitos do boletim:** `AREAS` e `CONC`.
- **Código da diretoria:** procure por `DIR-2026` (na função `entrar` e na tela de login).
- **Dados de demonstração:** função `seed()`.

## Tecnologias

HTML, CSS e JavaScript puros, sem dependências. Fontes Poppins e Plus Jakarta Sans, carregadas do Google Fonts.
