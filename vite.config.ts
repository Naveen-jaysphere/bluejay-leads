import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

const photoUploadPlugin = (): Plugin => ({
  name: 'founder-photo-upload',
  configureServer(server) {
    server.middlewares.use('/api/upload-founder-photo', (req, res) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => { body += chunk; });
        req.on('end', () => {
          try {
            const { dataUrl } = JSON.parse(body);
            const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const targetPath = path.resolve(__dirname, 'public/linkedinphotogoodquality.jpg');
            fs.writeFileSync(targetPath, buffer);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, path: '/linkedinphotogoodquality.jpg' }));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: String(err) }));
          }
        });
      } else {
        res.statusCode = 405;
        res.end();
      }
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
