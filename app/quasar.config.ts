import { defineConfig } from '#q-app/wrappers';

export default defineConfig((/* ctx */) => {
  return {
    boot: ['axios'],

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons', 'mdi-v7'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },
      typescript: {
        strict: true,
        vueShim: true,
      },
      vueRouterMode: 'hash',
      env: {
        API_URL: process.env.API_URL || 'http://localhost:3333/api',
      },
    },

    devServer: {
      open: true,
      port: 9000,
    },

    framework: {
      // Importa todos os componentes automaticamente (bom para começar).
      plugins: ['Notify', 'Dialog'],
    },
  };
});
