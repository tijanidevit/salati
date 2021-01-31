const info = require('../package.json');

module.exports = function (fastify, opts, next) {
  fastify.route({
    method: 'GET',
    url: '/health',
    schema: {
      tags: ['Health'],
      params: {
        type: 'object',
        properties: {
        }
      },
      response: {
        version: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        author: { type: 'string' },
        website: { type: 'string' },
        bugs: { type: 'string' },
      }
    },
    preHandler: async (request, reply) => {
    },
    handler: async (request, reply) => {
      return reply.send({
        version: info.version,
        name: info.name,
        description: info.description,
        author: info.author,
        website: info.homepage,
        bugs: info.bugs,
      });
    }
  })
  next()
}
