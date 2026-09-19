import { Produto } from '../entities/produto';

/**
 * Contrato (interface) do repositório de produtos.
 *
 * Este é o coração do Dependency Inversion Principle (o "D" de SOLID):
 * os use-cases dependem DESTA abstração, não de uma implementação concreta.
 * Trocar in-memory por Postgres/Prisma depois é só criar outra classe que
 * implemente esta interface — nenhum use-case precisa mudar.
 */
export interface ProdutoRepository {
  criar(produto: Produto): Promise<Produto>;
  listar(): Promise<Produto[]>;
  buscarPorId(id: string): Promise<Produto | null>;
  buscarPorSku(sku: string): Promise<Produto | null>;
  atualizar(produto: Produto): Promise<Produto>;
  remover(id: string): Promise<void>;
}
