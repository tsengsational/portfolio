// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/scss/main.scss'],
  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    navigation: {
      fields: ['title', 'description', 'image']
    }
  },
  app: {
    head: {
      title: 'Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio showcasing software engineering and artistic work' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/contact',
        '/software',
        '/art',
        '/software/2024-03-15-ecommerce-platform',
      ],
      crawlLinks: true
    },
    preset: 'static'
  },
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
