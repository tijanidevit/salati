const schema = require('../schemas/hadithById');
const errors = require('../models/errors');
const { findOne } = require('../repositories/hadithRepository');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const { id } = request.params;
      if (!id) {
        throw new errors.ValidationError('Id of the hadith is required', 'VALIDATION_ERROR');
      }
      const hadith = await findOne(id);
      if (!hadith) {
        throw new errors.NotFoundError('The hadit cannot be found.');
      }
      return reply.send(hadith);
    },
  });
  next();
};
