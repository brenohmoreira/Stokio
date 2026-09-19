/**
 * Erro de domínio/aplicação com status HTTP associado.
 * Use-cases lançam AppError; o error-handler HTTP traduz para a resposta.
 * Isso mantém a regra de negócio desacoplada do Express (SRP + DIP).
 */
export class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode = 400,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Recurso não encontrado') {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Conflito de dados') {
    super(message, 409);
    this.name = 'ConflictError';
  }
}
