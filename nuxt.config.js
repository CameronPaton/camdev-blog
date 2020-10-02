
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',


  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'camdev_blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"  },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"  },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"  },
    ],
    script: [
      { type: 'text/javascript', src: 'https://platform-api.sharethis.com/js/sharethis.js#property=5f74731cd6bec30019bb9fef&product=sop', async: 'async' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/disqus',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
        id: 'UA-168857087-1'
      }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    ['nuxt-lazy-load', {
      images: true,
      videos: true
    }]
  ],

  sitemap: {
      hostname: 'https://camdev.blog/',
      routes: [
        '/blog/',
        '/about/'
      ]
    },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-shades-of-purple.css',
      }
    }
  }
}
