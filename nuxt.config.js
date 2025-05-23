export default defineNuxtConfig({
  aos: {
    delay: 500,
    duration: 1000
  },
  app: {
    head: {
      charset: 'utf-8',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' },
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
      meta: [
        {
          name: 'description',
          content:
            'I’m Erik, a freelance software engineer and web developer in Orlando, FL specializing in web design and app development.'
        }
      ],
      titleTemplate: '%s - Erik Larson',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  buildDir: 'nuxt-dist',
  components: [{ path: '~/components/api' }, { path: '~/components/common' }, { path: '~/components/layout' }],
  devtools: { enabled: true },
  disqus: {
    shortname: process.env.NUXT_DISQUS_SHORTNAME
  },
  fontawesome: {
    icons: {
      solid: [
        'building-user',
        'calendar-day',
        'check-circle',
        'clipboard',
        'code',
        'file-lines',
        'folder',
        'laptop',
        'location-dot',
        'paper-plane',
        'tag',
        'terminal',
        'triangle-exclamation',
        'quote-left',
        'quote-right'
      ],
      brands: ['x-twitter', 'github', 'linkedin']
    }
  },
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    'nuxt-aos',
    'nuxt-disqus',
    'nuxt-gtag',
    'vue3-carousel-nuxt'
  ],
  runtimeConfig: {
    apiToken: process.env.API_TOKEN,
    basePath: process.env.BASE_PATH,
    public: {
      calendlyPath: process.env.CALENDLY_PATH,
      githubPath: process.env.GITHUB_PATH
    }
  },
  site: {
    name: 'Erik Larson | Senior Software Engineer',
    url: 'https://elwebco.com/'
  },
  ssr: true,
  tailwindcss: {
    cssPath: '~/assets/scss/main.scss'
  },
  compatibilityDate: '2024-11-01'
})
