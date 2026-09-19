import { describe, expect, it } from 'vitest';
import { CriarProdutoUseCase } from './criar-produto.use-case';
import { InMemoryProdutoRepository } from '../../infrastructure/repositories/in-memory-produto.repository';
import { ConflictError } from '../../shared/errors/app-error';

/**
 * Repare: testamos a REGRA DE NEGÓCIO sem Express, sem HTTP e sem banco.
 * Isso só é possível porque o use-case depende da interface do repositório
 * (DIP) — aqui injetamos a implementação in-memory. Esse é o grande ganho
 * prático de aplicar SOLID.
 */
describe('CriarProdutoUseCase', () => {
  const dadosBase = {
    sku: 'ABC-123',
    nome: 'Parafuso',
    categoria: 'Fixadores',
    unidade: 'un',
    estoqueMinimo: 10,
  };

  it('cria um produto com id e timestamps gerados', async () => {
    const repo = new InMemoryProdutoRepository();
    const useCase = new CriarProdutoUseCase(repo);

    const produto = await useCase.executar(dadosBase);

    expect(produto.id).toBeDefined();
    expect(produto.sku).toBe('ABC-123');
    expect(produto.criadoEm).toBeInstanceOf(Date);
    expect(await repo.listar()).toHaveLength(1);
  });

  it('não permite SKU duplicado', async () => {
    const repo = new InMemoryProdutoRepository();
    const useCase = new CriarProdutoUseCase(repo);

    await useCase.executar(dadosBase);

    await expect(useCase.executar(dadosBase)).rejects.toBeInstanceOf(ConflictError);
  });
});
