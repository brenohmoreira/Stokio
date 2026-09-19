import 'dotenv/config';
import { z } from 'zod';

/**
 * Validação das variáveis de ambiente com Zod.
 * Se algo estiver errado, a aplicação falha no startup (fail-fast) em vez
 * de quebrar em runtime com um valor inesperado.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3333),
  CORS_ORIGIN: z.string().default('http://localhost:9000'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Variáveis de ambiente inválidas:', parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;
