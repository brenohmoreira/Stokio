import { Router } from 'express';
import { produtoController } from '../container';
import { validateBody } from '../middlewares/validate';
import {
  atualizarProdutoSchema,
  criarProdutoSchema,
} from '../../../application/dtos/produto.schema';

export const produtoRoutes = Router();

produtoRoutes.get('/', produtoController.listar);
produtoRoutes.get('/:id', produtoController.buscar);
produtoRoutes.post('/', validateBody(criarProdutoSchema), produtoController.criar);
produtoRoutes.put('/:id', validateBody(atualizarProdutoSchema), produtoController.atualizar);
produtoRoutes.delete('/:id', produtoController.remover);
