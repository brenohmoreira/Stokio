import { ProdutoRepository } from '../../domain/repositories/produto.repository';
import { NotFoundError } from '../../shared/errors/app-error';

/** Use-case: remover um produto. */
export class RemoverProdutoUseCase {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async executar(id: string): Promise<void> {
    const produto = await this.produtoRepository.buscarPorId(id);
    if (!produto) {
      throw new NotFoundError(`Produto ${id} não encontrado`);
    }
    await this.produtoRepository.remover(id);
  }
}
