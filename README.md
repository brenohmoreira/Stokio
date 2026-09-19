# Stokio

Projeto de estudo de **SOLID** e **design patterns** — um sistema de controle
de estoque dividido em dois módulos:

```
Stokio/
├── api/   # Backend  — Express + TypeScript + Zod (arquitetura em camadas)
└── app/   # Frontend — Quasar (Vue 3 + Vite) + TypeScript
```

## Rodando o projeto

Suba os dois em terminais separados:

```bash
# Terminal 1 — API
cd api
npm install
cp .env.example .env
npm run dev            # http://localhost:3333/api

# Terminal 2 — App
cd app
npm install
npm run dev            # http://localhost:9000
```

O app já consome a API (lista/cria/remove produtos na tela `/produtos`).

## Objetivo de estudo

- **api/** foi feita *sem* framework opinativo de propósito: você monta as
  camadas e a injeção de dependência "na mão", sentindo cada princípio SOLID.
  Veja `api/README.md` para o mapeamento princípio → código.
- Próximo passo sugerido: recriar a mesma API em **NestJS** e comparar — vai
  perceber que o Nest automatiza a fiação (DI, módulos) que aqui é manual.

## Roadmap de exercícios
1. Recurso de **Movimentação** (ENTRADA/SAIDA/AJUSTE) com saldo derivado.
2. **Strategy** para custeio (custo médio vs. FIFO/PEPS).
3. Persistência real (Prisma/Postgres) trocando só o repositório.
4. Autenticação + permissões.
