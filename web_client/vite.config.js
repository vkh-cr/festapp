import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  server: {
    host: true, // Expose to network
    port: 5173, // Default, but explicit is good
    proxy: {}
  },
  configureServer: (server) => {
    server.middlewares.use((req, res, next) => {
      console.log('>> [Vite Req]', req.method, req.url);
      next();
    });
  },
  build: {
    assetsDir: 'web-assets'
  }
});
