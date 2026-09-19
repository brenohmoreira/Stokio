import { ProdutoRepository } from '../../domain/repositories/produto.repository';
import { Produto } from '../../domain/entities/produto';

/** Use-case: listar todos os produtos. */
export class ListarProdutosUseCase {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async executar(): Promise<Produto[]> {
    return this.produtoRepository.listar();
  }
}
