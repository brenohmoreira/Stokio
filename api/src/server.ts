import { createApp } from './app';
import { env } from './config/env';

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`🚀 Stokio API rodando em http://localhost:${env.PORT}/api`);
  console.log(`   Ambiente: ${env.NODE_ENV}`);
});
