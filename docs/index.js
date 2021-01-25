module.exports = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: process.env.TITLE,
      description: 'REST Api for prayer times, hadits, quran, ...',
      version: '1.0.0'
    },
    host: 'salati.hmounir.com',
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'Bearer',
        in: 'header'
      }
    },
    definitions: {}
  }
}
