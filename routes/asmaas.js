const info = require('../package.json');
const schema = require('../schemas/asmaas');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) =>
      reply.send({
        version: info.version,
        name: info.name,
        description: info.description,
        author: info.author,
        website: info.homepage,
        bugs: info.bugs.url,
      }),
  });
  next();
};
