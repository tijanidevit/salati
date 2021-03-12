const schema = require('../schemas/asmaaByRandom');
const { findRandomly } = require('../repositories/asmaaRepository');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const asmaa = await findRandomly();
      return reply.send(asmaa[0]);
    },
  });
  next();
};
