import { randomUUID } from 'node:crypto';
import { ProdutoRepository } from '../../domain/repositories/produto.repository';
import { Produto } from '../../domain/entities/produto';
import { ConflictError } from '../../shared/errors/app-error';
import { CriarProdutoDTO } from '../dtos/produto.schema';

/**
 * Use-case: criar um produto.
 *
 * SRP: esta classe faz UMA coisa. A regra de negócio (SKU não pode duplicar)
 * mora aqui, não no controller nem no repositório.
 * DIP: recebe a interface ProdutoRepository pelo construtor (injeção de
 * dependência "na mão" — no Nest isso seria o @Injectable).
 */
export class CriarProdutoUseCase {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async executar(dados: CriarProdutoDTO): Promise<Produto> {
    const existente = await this.produtoRepository.buscarPorSku(dados.sku);
    if (existente) {
      throw new ConflictError(`Já existe um produto com o SKU "${dados.sku}"`);
    }

    const agora = new Date();
    const produto: Produto = {
      id: randomUUID(),
      ...dados,
      criadoEm: agora,
      atualizadoEm: agora,
    };

    return this.produtoRepository.criar(produto);
  }
}
