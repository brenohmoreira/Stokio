import { NextFunction, Request, Response } from 'express';
import { CriarProdutoUseCase } from '../../../application/use-cases/criar-produto.use-case';
import { ListarProdutosUseCase } from '../../../application/use-cases/listar-produtos.use-case';
import { BuscarProdutoUseCase } from '../../../application/use-cases/buscar-produto.use-case';
import { AtualizarProdutoUseCase } from '../../../application/use-cases/atualizar-produto.use-case';
import { RemoverProdutoUseCase } from '../../../application/use-cases/remover-produto.use-case';

/**
 * Controller HTTP: a fina camada que traduz req/res <-> use-cases.
 * NÃO contém regra de negócio (isso é dos use-cases) nem acesso a dados.
 * Recebe os use-cases prontos pelo construtor (injeção de dependência).
 */
export class ProdutoController {
  constructor(
    private readonly criarProduto: CriarProdutoUseCase,
    private readonly listarProdutos: ListarProdutosUseCase,
    private readonly buscarProduto: BuscarProdutoUseCase,
    private readonly atualizarProduto: AtualizarProdutoUseCase,
    private readonly removerProduto: RemoverProdutoUseCase,
  ) {}

  criar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const produto = await this.criarProduto.executar(req.body);
      res.status(201).json(produto);
    } catch (err) {
      next(err);
    }
  };

  listar = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const produtos = await this.listarProdutos.executar();
      res.json(produtos);
    } catch (err) {
      next(err);
    }
  };

  buscar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const produto = await this.buscarProduto.executar(req.params.id);
      res.json(produto);
    } catch (err) {
      next(err);
    }
  };

  atualizar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const produto = await this.atualizarProduto.executar(req.params.id, req.body);
      res.json(produto);
    } catch (err) {
      next(err);
    }
  };

  remover = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.removerProduto.executar(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}
