import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
  ],
  css: {
    postcss: {
      plugins: [
        require('postcss-pxtorem')({
          rootValue: 100,
          propList: ['*'],
        }),
      ],
    },
  },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: {
    port: 8085,
    host: true,
    open: true,
  },
});
