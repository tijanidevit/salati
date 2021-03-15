const config = require('config');
const definitions = require('./models');

module.exports = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      description: 'REST Api for prayer times, hadiths, quran, ...',
      version: '1.0.0',
      title: config.get('title'),
      termsOfService: 'https://salati.hmounir.com/terms',
      contact: { email: 'hmounir.work@gmail.com' },
      license: { name: 'MIT License', url: 'https://github.com/hamzaPixl/salati/blob/master/LICENSE' },
    },
    host: config.get('swaggerHost'),
    schemes: ['http', 'https'],
    tags: [
      { name: 'Health', description: 'Health ping to server' },
      { name: 'Asmaa', description: 'Asmaa ul Husnaa related end-points' },
      { name: 'Hadith', description: 'Hadiths related end-points' },
      { name: 'Calendar', description: 'Calendar related end-points' },
      { name: 'Prayer', description: 'Prayer related end-points' },
      { name: 'Quran', description: 'Quran related end-points' },
    ],
    externalDocs: { description: 'Find more info here', url: 'https://salati.hmounir.com/docs' },
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'Bearer',
        in: 'header',
      },
    },
    definitions,
  },
};
