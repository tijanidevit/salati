const definitions = require('./models');

module.exports = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      description: 'REST Api for prayer times, hadits, quran, ...',
      version: '1.0.0',
      title: 'Salati',
      termsOfService: 'https://salati.hmounir.com/terms',
      contact: { email: 'hmounir.work@gmail.com' },
      license: { name: 'MIT License', url: 'https://github.com/hamzaPixl/salati/blob/master/LICENSE' },
    },
    host: 'localhost:3000',
    schemes: ['https', 'http'],
    tags: [
      { name: 'Quran', description: 'Quran related end-points' },
      { name: 'Prayer', description: 'Prayer related end-points' },
      { name: 'Asmaa', description: 'Asmaa ul Husnaa related end-points' },
      { name: 'Calendar', description: 'Calendar related end-points' },
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
