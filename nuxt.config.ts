export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxthq/ui',
    // https://github.com/nuxt-modules/color-mode
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@cssninja/nuxt-toaster'
  ],
  supabase:{
    url: 'https://ddxhvnetcjxgqlfzjagi.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkeGh2bmV0Y2p4Z3FsZnpqYWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1ODQ4NzEsImV4cCI6MjAwNDE2MDg3MX0.IQdae-eqtXy2slU8JcIrosLHBihXjSADc2n3b2EpVAs'
  },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  ui: {
    colors: {
      primary: 'green'
    },
    icons: ['mdi', 'heroicons', 'heroicons-outline']
  }
})
