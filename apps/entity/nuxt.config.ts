import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: '../tsconfig.app.json', // Nuxt copies this string as-is to the `./.nuxt/tsconfig.json`, therefore it needs to be relative to that directory
    },
  },
  imports: {
    autoImport: true,
  },

  css: ['~/assets/css/styles.scss'],

  build: {
    loaders: {
      scss: {
        additionalData: `
          @import "~/assets/css/colors.scss";
        `
      }
    }
  },

  vite: {
    plugins: [nxViteTsPaths()],
  },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        legacy: true,
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        messages: {
          en: {
            hi: 'Welcome',
            welcome: 'Welcome',
          },
          fr: {
            hi: 'Bienvenue',
            welcome: 'Welcome',
          }
        }
      }
    ]
  ],
});
