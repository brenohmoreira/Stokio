import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env';
import { routes } from './interface/http/routes';
import { errorHandler } from './interface/http/middlewares/error-handler';

/**
 * Monta a aplicação Express (sem subir o servidor).
 * Separar `app` de `server` facilita testes de integração (você importa o
 * app e testa sem abrir uma porta de rede).
 */
export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.CORS_ORIGIN }));
  app.use(express.json());

  app.use('/api', routes);

  // Error handler deve ser o último middleware registrado.
  app.use(errorHandler);

  return app;
}
