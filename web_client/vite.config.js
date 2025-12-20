import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  server: {
    host: true, // Expose to network
    port: 5173, // Default, but explicit is good
    proxy: {
      // Proxy any request that is NOT part of the web client to the Flutter app
      // Exclude:
      // - / (Root) - served by index.html
      // - /index.html
      // - /form/* - Web Client route
      // - /src/* - Source code
      // - /node_modules/* - Dependencies
      // - /@* - Vite internals
      //
      // NOTE: /assets is REMOVED from exclusion. We handle it in bypass() to support both apps.
      
      // Updated Regex:
      // Exclude:
      // - ^/$ (Root strictly)
      // - ^/? (Root with query params, e.g. Vite HMR)
      // - ^/index.html  
      // - ^/@ (Vite internals)
      // - ^/node_modules
      // - ^/src
      // - ^/form
      // - ^/favicon
      // - ^/sw.js
      // - ^/site.webmanifest
      //
      // Using negative lookahead: ^/(?!$|\\?|index\.html|@|node_modules|src|form|favicon|sw\.js|site\.webmanifest).*
      // Note: "assets" is handled by bypass logic below, so we allow it to match regex, but bypass checks FS.
      
      '^/(?!$|\\?|index\\.html|@|node_modules|src|form|favicon|sw\\.js|site\\.webmanifest|robots\\.txt|sitemap\\.xml|assets).*': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true, // Enable WebSocket proxying for Flutter Hot Restart
        configure: (proxy, options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
        },
        bypass: (req, res, options) => {
            // Smart Asset Proxying
            // If the request is for an asset that exists in the Web Client's local filesystem,
            // bypass the proxy so Vite serves it.
            // Otherwise, let it pass through to Flutter.
            if (req.url.startsWith('/assets/')) {
                // Check if file exists in ./assets
                // Clean URL params if any
                const cleanUrl = req.url.split('?')[0];
                const localPath = path.join(__dirname, cleanUrl);

                if (fs.existsSync(localPath)) {
                  //  console.log('Serving local asset:', cleanUrl);
                    return req.url;
                }
            }
            // For everything else matching the regex, we return nothing (falsy) to let it PROXY.
        }
      }
    }
  },
  build: {
    assetsDir: 'web-assets'
  }
});
