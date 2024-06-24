import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

import axios from 'axios';
import fs from 'fs';
import path from 'path';

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

  buildModules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: []
  },

  hooks: {
    build: {
      before: async () => {
        const remoteUrl = 'https://pub-a9e8df2f7f1b451a888bddcd14cec0b5.r2.dev/colors.scss';
        const localPath = path.resolve(__dirname, 'src/assets/css/_remote-colors.scss');

        const response = await axios.get(remoteUrl);
        fs.writeFileSync(localPath, response.data);
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
        legacy: false,
        locales: ['en', 'fr', 'es'],
        defaultLocale: 'en',
      }
    ]
  ],
});
