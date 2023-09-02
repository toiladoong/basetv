import { defineConfig, loadEnv } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({ command, mode, ssrBuild, }) => {
  return {
    base: './',
    publicDir: 'static',
    build: {
      minify: true,
      sourcemap: false,
    },
    plugins: [
      // legacy({
      //   targets: ['chrome >= 47'],
      //   modernPolyfills: ['es/global-this'],
      // })
    ]
  }
})