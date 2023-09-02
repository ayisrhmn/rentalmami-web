import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    mode,
    plugins: [react()],
    server: {
      fs: {
        allow: ['../../../'],
      },
      port: Number(process.env.VITE_PORT),
      host: process.env.VITE_HOST,
    },
    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      dedupe: ['react'],
    },
  });
};
