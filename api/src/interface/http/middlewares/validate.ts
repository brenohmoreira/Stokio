import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

/**
 * Middleware de validação genérico (Open/Closed: aberto a novos schemas
 * sem alterar o middleware). Valida `req.body` contra um schema Zod e
 * substitui pelo dado já tipado/normalizado.
 */
export function validateBody(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const resultado = schema.safeParse(req.body);
    if (!resultado.success) {
      return res.status(422).json({
        erro: 'Dados inválidos',
        detalhes: resultado.error.flatten().fieldErrors,
      });
    }
    req.body = resultado.data;
    return next();
  };
}
