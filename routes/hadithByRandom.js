const schema = require('../schemas/hadithByRandom');
const { findRandomly } = require('../repositories/hadithRepository');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const hadith = await findRandomly();
      return reply.send(hadith[0]);
    },
  });
  next();
};
