const info = require('../package.json');
const schema = require('../schemas/asmaas');

module.exports = function (fastify, opts, next) {
  fastify.route({
    ...schema,
    preHandler: async (request, reply) => {},
    handler: async (request, reply) => {
      return reply.send({
        version: info.version,
        name: info.name,
        description: info.description,
        author: info.author,
        website: info.homepage,
        bugs: info.bugs.url,
      });
    },
  });
  next();
};
