// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const requestedTheme = process.env.THEME || 'four-zelt';
const themeMap = {
  'one-dog': 'one-dog',
  dog: 'one-dog',
  '1': 'one-dog',
  'two-printer': 'two-printer',
  printer: 'two-printer',
  classic: 'two-printer',
  retro: 'two-printer',
  '2': 'two-printer',
  'three-hybrid': 'three-hybrid',
  hybrid: 'three-hybrid',
  '3': 'three-hybrid',
  'four-zelt': 'four-zelt',
  zelt: 'four-zelt',
  four: 'four-zelt',
  '4': 'four-zelt',
};
const ACTIVE_THEME = themeMap[requestedTheme] || requestedTheme;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, `src/themes/${ACTIVE_THEME}`),
      },
    },
  },
});