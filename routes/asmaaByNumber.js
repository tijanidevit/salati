const schema = require('../schemas/asmaaByNumber');
const errors = require('../models/errors');
const { findOne } = require('../repositories/asmaaRepository');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const { number } = request.params;
      if (!number || number > 99 || number < 1) {
        throw new errors.ValidationError('Id of the name is invalid must be between 1-99 included', 'VALIDATION_ERROR');
      }
      const asmaa = await findOne(number);
      if (!asmaa) {
        throw new errors.NotFoundError('The name cannot be found.');
      }
      return reply.send(asmaa);
    },
  });
  next();
};
