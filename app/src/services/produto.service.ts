import { api } from 'src/boot/axios';
import type { CriarProdutoInput, Produto } from 'src/types/produto';

/**
 * Service: isola as chamadas HTTP do resto do app.
 * Componentes e stores dependem DESTA camada, não do Axios direto — assim, se
 * a API mudar, você altera só aqui (Single Responsibility no frontend também).
 */
export const produtoService = {
  listar(): Promise<Produto[]> {
    return api.get<Produto[]>('/produtos').then((r) => r.data);
  },

  criar(dados: CriarProdutoInput): Promise<Produto> {
    return api.post<Produto>('/produtos', dados).then((r) => r.data);
  },

  remover(id: string): Promise<void> {
    return api.delete(`/produtos/${id}`).then(() => undefined);
  },
};
