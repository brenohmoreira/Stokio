import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../shared/errors/app-error';

/**
 * Error handler central do Express.
 * Traduz erros de domínio (AppError) para respostas HTTP e evita vazar
 * stack traces em produção. Deve ser registrado por ÚLTIMO no app.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ erro: err.message });
  }

  console.error('Erro inesperado:', err);
  return res.status(500).json({ erro: 'Erro interno do servidor' });
}
