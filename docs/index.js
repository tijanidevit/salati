module.exports = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Salati',
      description: 'REST Api for prayer times, hadits, quran, ...',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://salati.hmounir.com/docs',
      description: 'Find more info here',
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'quran', description: 'Quran related end-points' },
      { name: 'prayer', description: 'Prayer related end-points' },
      { name: 'asmaa', description: 'Asmaa ul Husnaa related end-points' },
      { name: 'calendar', description: 'Calendar related end-points' },
    ],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'Bearer',
        in: 'header',
      },
    },
    definitions: {},
  },
};
