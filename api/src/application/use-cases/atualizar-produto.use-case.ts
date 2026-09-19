import { ProdutoRepository } from '../../domain/repositories/produto.repository';
import { Produto } from '../../domain/entities/produto';
import { ConflictError, NotFoundError } from '../../shared/errors/app-error';
import { AtualizarProdutoDTO } from '../dtos/produto.schema';

/** Use-case: atualizar um produto existente. */
export class AtualizarProdutoUseCase {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async executar(id: string, dados: AtualizarProdutoDTO): Promise<Produto> {
    const produto = await this.produtoRepository.buscarPorId(id);
    if (!produto) {
      throw new NotFoundError(`Produto ${id} não encontrado`);
    }

    // Se o SKU mudou, garante que não colide com outro produto.
    if (dados.sku && dados.sku !== produto.sku) {
      const comMesmoSku = await this.produtoRepository.buscarPorSku(dados.sku);
      if (comMesmoSku) {
        throw new ConflictError(`Já existe um produto com o SKU "${dados.sku}"`);
      }
    }

    const atualizado: Produto = {
      ...produto,
      ...dados,
      atualizadoEm: new Date(),
    };

    return this.produtoRepository.atualizar(atualizado);
  }
}
