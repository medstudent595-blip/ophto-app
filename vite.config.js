import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['pwa-icon.svg'],
      workbox: {
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024
      },
      manifest: {
        name: 'Ophto App DEMS',
        short_name: 'OphtoApp',
        description: 'Application de révision en Ophtalmologie',
        theme_color: '#0b0f19',
        background_color: '#0b0f19',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-icon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
});
