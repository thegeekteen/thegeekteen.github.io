// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/scripts'],
  app: {
    baseURL: '',
    head: {
      link: [
        { rel: 'stylesheet', href: 'assets/css/main.css' },
        { rel: 'stylesheet', href: 'assets/css/noscript.css' }
      ]
    }
  },
  scripts: {
    globals: {
      'jquery_min': [{ src: 'assets/js/jquery.min.js' }, { trigger: 'client' }],
      'jquery_scrollex_min': [{ src: 'assets/js/jquery.scrollex.min.js' }, { trigger: 'client' }],
      'breakpoints_min': [{ src: 'assets/js/breakpoints.min.js' }, { trigger: 'client' }],
      'util': [{ src: 'assets/js/util.js' }, { trigger: 'client' }],
      'main': [{ src: 'assets/js/main.js' }, { trigger: 'client' }]
    }
  }
});