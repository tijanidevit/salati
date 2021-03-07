const schema = require('../schemas/asmaaByRandom');
const { findOne } = require('../repositories/asmaaRepository');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const number = Math.floor(Math.random() * 99) + 1;
      const asmaa = await findOne(number);
      return reply.send(asmaa);
    },
  });
  next();
};
