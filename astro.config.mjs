import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { Font } from 'astro-fonts';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind({
    config: {fontFamily: {
      'Coolvetica': ['Coolvetica', 'serif', 'sans-serif'],
      'Gatha': ['Gatha', 'serif', 'sans-serif'],
      'Lato': ['Lato', 'serif', 'sans-serif'],
      'Poppins': ['Poppins', 'serif', 'sans-serif'],
      'Salma': ['Salma','serif', 'sans-serif'],
    }
  }}
  )]
});