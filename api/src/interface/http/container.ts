import { InMemoryProdutoRepository } from '../../infrastructure/repositories/in-memory-produto.repository';
import { CriarProdutoUseCase } from '../../application/use-cases/criar-produto.use-case';
import { ListarProdutosUseCase } from '../../application/use-cases/listar-produtos.use-case';
import { BuscarProdutoUseCase } from '../../application/use-cases/buscar-produto.use-case';
import { AtualizarProdutoUseCase } from '../../application/use-cases/atualizar-produto.use-case';
import { RemoverProdutoUseCase } from '../../application/use-cases/remover-produto.use-case';
import { ProdutoController } from './controllers/produto.controller';

/**
 * Composition Root — o único lugar que conhece as implementações concretas
 * e "costura" tudo. Aqui você faz a injeção de dependência manualmente.
 *
 * Para trocar o repositório por um banco real, mude SÓ esta linha:
 *   const produtoRepository = new PrismaProdutoRepository();
 * (É exatamente esse trabalho de fiação que o Nest automatiza com DI.)
 */
const produtoRepository = new InMemoryProdutoRepository();

export const produtoController = new ProdutoController(
  new CriarProdutoUseCase(produtoRepository),
  new ListarProdutosUseCase(produtoRepository),
  new BuscarProdutoUseCase(produtoRepository),
  new AtualizarProdutoUseCase(produtoRepository),
  new RemoverProdutoUseCase(produtoRepository),
);
