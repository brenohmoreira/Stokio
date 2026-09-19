import { Produto } from '../../domain/entities/produto';
import { ProdutoRepository } from '../../domain/repositories/produto.repository';

/**
 * Implementação in-memory do ProdutoRepository.
 *
 * Serve para rodar/estudar sem banco de dados. Quando você quiser um banco
 * de verdade, crie um `PrismaProdutoRepository` que implemente a MESMA
 * interface e troque apenas no composition root (container.ts).
 * Nenhum use-case muda — isso é o DIP na prática.
 */
export class InMemoryProdutoRepository implements ProdutoRepository {
  private produtos: Produto[] = [];

  async criar(produto: Produto): Promise<Produto> {
    this.produtos.push(produto);
    return produto;
  }

  async listar(): Promise<Produto[]> {
    return [...this.produtos];
  }

  async buscarPorId(id: string): Promise<Produto | null> {
    return this.produtos.find((p) => p.id === id) ?? null;
  }

  async buscarPorSku(sku: string): Promise<Produto | null> {
    return this.produtos.find((p) => p.sku === sku) ?? null;
  }

  async atualizar(produto: Produto): Promise<Produto> {
    const indice = this.produtos.findIndex((p) => p.id === produto.id);
    if (indice >= 0) {
      this.produtos[indice] = produto;
    }
    return produto;
  }

  async remover(id: string): Promise<void> {
    this.produtos = this.produtos.filter((p) => p.id !== id);
  }
}
