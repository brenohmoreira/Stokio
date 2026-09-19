import { z } from 'zod';

/**
 * Schemas de validação com Zod.
 * Ficam na camada de aplicação porque descrevem o contrato de entrada dos
 * use-cases. O controller HTTP só delega a validação para cá.
 */
export const criarProdutoSchema = z.object({
  sku: z.string().trim().min(1, 'SKU é obrigatório'),
  nome: z.string().trim().min(1, 'Nome é obrigatório'),
  categoria: z.string().trim().min(1, 'Categoria é obrigatória'),
  unidade: z.string().trim().min(1, 'Unidade é obrigatória').default('un'),
  estoqueMinimo: z.coerce.number().int().min(0).default(0),
});

export const atualizarProdutoSchema = criarProdutoSchema.partial();

export type CriarProdutoDTO = z.infer<typeof criarProdutoSchema>;
export type AtualizarProdutoDTO = z.infer<typeof atualizarProdutoSchema>;
