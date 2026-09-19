# Stokio API

API de controle de estoque em **Express + TypeScript**, estruturada em camadas
para estudo prático de **SOLID** e **design patterns**.

## Arquitetura em camadas

```
src/
├── domain/            # Regras e contratos puros (sem framework)
│   ├── entities/          Produto, Movimentacao
│   └── repositories/      Interfaces (ex: ProdutoRepository)  <- DIP
├── application/       # Casos de uso (1 responsabilidade cada)  <- SRP
│   ├── use-cases/
│   └── dtos/              Schemas Zod de validação
├── infrastructure/    # Implementações concretas (banco, etc.)
│   └── repositories/      InMemoryProdutoRepository
├── interface/http/    # Camada de entrega (Express)
│   ├── controllers/       Traduz req/res <-> use-cases
│   ├── routes/
│   ├── middlewares/       validate (Zod), error-handler
│   └── container.ts       Composition Root (injeção de dependência)
├── shared/            # Erros e utilitários
├── config/            # env validado com Zod
├── app.ts             # Monta o Express
└── server.ts          # Sobe o servidor
```

### Como os princípios aparecem no código
- **S** — cada use-case faz uma coisa só.
- **O** — `validateBody(schema)` aceita novos schemas sem ser alterado.
- **D** — use-cases dependem da *interface* `ProdutoRepository`, não da implementação.
- **Padrões** — Repository (dados), Composition Root (DI manual). Próximos:
  Strategy (custeio médio/FIFO) e Factory (criação de movimentações).

## Rodando

```bash
npm install
cp .env.example .env
npm run dev        # sobe em http://localhost:3333/api
```

## Endpoints

| Método | Rota                | Descrição              |
|--------|---------------------|------------------------|
| GET    | /api/health         | Healthcheck            |
| GET    | /api/produtos       | Lista produtos         |
| GET    | /api/produtos/:id   | Busca por id           |
| POST   | /api/produtos       | Cria produto           |
| PUT    | /api/produtos/:id   | Atualiza produto       |
| DELETE | /api/produtos/:id   | Remove produto         |

Exemplo:
```bash
curl -X POST http://localhost:3333/api/produtos \
  -H 'Content-Type: application/json' \
  -d '{"sku":"ABC-123","nome":"Parafuso","categoria":"Fixadores","unidade":"un","estoqueMinimo":10}'
```

## Testes

```bash
npm test
```

## Próximos exercícios (SOLID/patterns)
1. Recurso de **Movimentação** (ENTRADA/SAIDA/AJUSTE) — saldo derivado.
2. **Strategy** para custeio: custo médio vs. FIFO/PEPS.
3. Trocar `InMemoryProdutoRepository` por Prisma/Postgres — só mexendo no `container.ts`.
