const schema = require('../schemas/asmaas');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => reply.send({}),
  });
  next();
};
