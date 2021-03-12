const schema = require('../schemas/hadiths');
const { findAll } = require('../repositories/hadithRepository');
const httpQueriesExtractor = require('../lib/http/httpQueriesExtractor');

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const queries = httpQueriesExtractor.buildSortFilterPagingObject(request.query);
      const hadiths = await findAll(queries);
      return reply.send(hadiths);
    },
  });
  next();
};
