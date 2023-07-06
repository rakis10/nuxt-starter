export default defineNuxtConfig({
  modules: [
    // https://github.com/nuxt-modules/supabase
    '@nuxtjs/supabase',
    // UI lib (will be soon open sourced)
    '@nuxthq/ui',
    // https://github.com/nuxt-modules/color-mode
    '@nuxtjs/color-mode'
  ],
  supabase:{
    url: 'https://ddxhvnetcjxgqlfzjagi.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkeGh2bmV0Y2p4Z3FsZnpqYWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1ODQ4NzEsImV4cCI6MjAwNDE2MDg3MX0.IQdae-eqtXy2slU8JcIrosLHBihXjSADc2n3b2EpVAs'
  },
  ui: {
    colors: {
      primary: 'green'
    },
    icons: ['mdi', 'heroicons', 'heroicons-outline']
  }
})
