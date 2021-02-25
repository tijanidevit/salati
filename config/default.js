module.exports = {
  logLevel: 'info',
  title: 'Salati',
  pagination: {
    defaultPage: 0,
    defaultCount: 15,
    maxCount: 100,
  },
  env: process.env.NODE_ENV,
  originUrl: process.env.ORIGIN_URL,
  defaultTimezone: 'Europe/Brussels',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET,
  host: process.env.HOST || '0.0.0.0',
  mongo: process.env.MONGO || 'localhost:27017/salati',
};
