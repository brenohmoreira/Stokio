import { Router } from 'express';
import { produtoRoutes } from './produto.routes';

export const routes = Router();

routes.get('/health', (_req, res) => res.json({ status: 'ok' }));
routes.use('/produtos', produtoRoutes);

// Próximos recursos entram aqui:
// routes.use('/movimentacoes', movimentacaoRoutes);
// routes.use('/categorias', categoriaRoutes);
