/**
 * Entidade de domínio: Movimentação de estoque.
 *
 * REGRA DE OURO do projeto: o saldo NUNCA é editado diretamente.
 * Ele é derivado da soma das movimentações (ENTRADA soma, SAIDA subtrai).
 * Isso garante histórico completo e auditoria.
 *
 * (Ainda não há use-cases de movimentação implementados — é o seu próximo
 * exercício. Um bom lugar para aplicar o padrão Strategy no custeio:
 * custo médio vs. FIFO/PEPS.)
 */
export type TipoMovimentacao = 'ENTRADA' | 'SAIDA' | 'AJUSTE';

export interface Movimentacao {
  id: string;
  produtoId: string;
  tipo: TipoMovimentacao;
  quantidade: number;
  custoUnitario?: number;
  motivo: string;
  criadoEm: Date;
}
