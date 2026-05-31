// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@pinia/nuxt'],
  css: ["@/styles/styles.less"],
  vite: {
    plugins: [
      svgLoader()
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "@/styles/global/variables.less";
            @import "@/styles/global/mixins.less";
          `,
        },
      },
    },
  },
  devServer: { host: '0.0.0.0' },
  devtools: { enabled: true }
})
