import { defineBoot } from '#q-app/wrappers';
import axios, { type AxiosInstance } from 'axios';
import { createPinia } from 'pinia';

/**
 * Boot file: roda antes do app montar.
 * Aqui configuramos o Axios (apontando para a Stokio API) e instalamos o Pinia.
 */
declare module 'vue' {
  interface ComponentCustomProperties {
    $api: AxiosInstance;
  }
}

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3333/api',
});

export default defineBoot(({ app }) => {
  app.use(createPinia());

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
