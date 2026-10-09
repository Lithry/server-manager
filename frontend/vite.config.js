import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const proxyTarget = env.VITE_DEV_API_URL || 'http://localhost:8099';

  return {
    root: '.',
    base: '/static/',
    build: {
      outDir: '../src/static',
      emptyOutDir: true,
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: { vendor: ['lit-html'] },
          assetFileNames: (assetInfo) => 
            assetInfo.name.endsWith('.css') ? 'assets/[name]-[hash][extname]' : 'assets/images/[name]-[hash][extname]'
        }
      }
    },
    css: {
      modules: {
        generateScopedName: process.env.NODE_ENV === 'production' 
          ? '[hash:base64:6]' 
          : '[name]__[local]__[hash:base64:4]'
      }
    },
    server: {
      port: 5173,
      proxy: {
        '/api': proxyTarget,
        '/health': proxyTarget
      }
    }
  };
});
