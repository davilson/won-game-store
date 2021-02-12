const withPWA = require('next-pwa')
const inProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !inProduction
  }
})
