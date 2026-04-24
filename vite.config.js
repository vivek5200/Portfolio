import Sitemap from 'vite-plugin-sitemap'

export default {
  plugins: [
    // ... your other plugins
    Sitemap({ hostname: 'https://vivekbendre.me' }),
  ],
}