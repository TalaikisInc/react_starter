require('dotenv').config({ path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development' })

module.exports = {
  siteTitle: 'Sample Site',
  PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
  APP_SECRET: process.env.APP_SECRET
}
