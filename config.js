module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
  title: process.env.TITLE || 'Salati',
  pagination: {
    defaultPage: 0,
    defaultCount: 15,
    maxCount: 100,
  },
};
