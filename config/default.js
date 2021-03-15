module.exports = {
  logLevel: 'info',
  title: 'Salati',
  pagination: {
    defaultPage: 0,
    defaultCount: 15,
    maxCount: 100,
  },
  languages: ['ar', 'en', 'fr'],
  env: process.env.NODE_ENV,
  originUrl: process.env.ORIGIN_URL,
  defaultTimezone: 'Europe/Brussels',
  localisation: {
    latitude: 50.8465573,
    longitude: 4.351697,
  },
  port: process.env.PORT || 3000,
  secret: process.env.SECRET,
  host: process.env.HOST || '0.0.0.0',
  swaggerHost: 'salati.hmounir.com',
  mongo: process.env.MONGO || 'mongodb://localhost:27017/salati',
};
