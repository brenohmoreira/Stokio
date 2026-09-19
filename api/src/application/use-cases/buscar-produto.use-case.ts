import { ProdutoRepository } from '../../domain/repositories/produto.repository';
import { Produto } from '../../domain/entities/produto';
import { NotFoundError } from '../../shared/errors/app-error';

/** Use-case: buscar um produto por id. */
export class BuscarProdutoUseCase {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async executar(id: string): Promise<Produto> {
    const produto = await this.produtoRepository.buscarPorId(id);
    if (!produto) {
      throw new NotFoundError(`Produto ${id} não encontrado`);
    }
    return produto;
  }
}
