const schema = require('../schemas/asmaaByRandom');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => reply.send({}),
  });
  next();
};
