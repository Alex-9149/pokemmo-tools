// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Para GitHub Pages: descomentar 'base' con el nombre del repo
// base: '/Guide_Pokemmo/',
export default defineConfig({
  site: 'https://alex-9149.github.io',
  base: '/pokemmo-tools/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
