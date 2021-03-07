const schema = require('../schemas/asmaas');
const { findAll } = require('../repositories/asmaaRepository');
const httpQueriesExtractor = require('../lib/http/httpQueriesExtractor');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const queries = httpQueriesExtractor.buildSortFilterPagingObject(request.query);
      const asmaas = await findAll(queries);
      return reply.send(asmaas);
    },
  });
  next();
};
