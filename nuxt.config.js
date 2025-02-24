export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' }
      ],
      titleTemplate: '%s - Erik Larson',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  buildDir: 'nuxt-dist',
  devtools: { enabled: true },
  fontawesome: {
    icons: {
      solid: ['triangle-exclamation'],
      brands: ['x-twitter', 'github', 'linkedin']
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
  runtimeConfig: {
    apiToken: process.env.API_TOKEN,
    basePath: process.env.BASE_PATH
  },
  ssr: false,
  tailwindcss: {
    cssPath: '~/assets/scss/main.scss'
  },
  compatibilityDate: '2024-11-01'
})
