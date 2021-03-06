const schema = require('../schemas/asmaaByNumber');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => reply.send({}),
  });
  next();
};
