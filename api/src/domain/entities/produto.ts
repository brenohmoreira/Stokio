/**
 * Entidade de domínio: Produto.
 * Representa o item cadastrável no estoque. É um tipo puro, sem dependência
 * de framework ou banco — isso é o que permite testar a regra isoladamente.
 */
export interface Produto {
  id: string;
  sku: string;
  nome: string;
  categoria: string;
  unidade: string; // ex: 'un', 'kg', 'cx'
  estoqueMinimo: number;
  criadoEm: Date;
  atualizadoEm: Date;
}

/** Dados necessários para criar um produto (sem campos gerados pelo sistema). */
export type CriarProdutoInput = Omit<Produto, 'id' | 'criadoEm' | 'atualizadoEm'>;

/** Campos editáveis de um produto. */
export type AtualizarProdutoInput = Partial<CriarProdutoInput>;
