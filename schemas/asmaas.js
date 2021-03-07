const asmaas = require('../docs/models/asmaa');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/asmaas',
  schema: {
    tags: ['Asmaa'],
    summary: 'Give all the Asmaa ul Husnaa',
    description: 'Give all the Asmaa ul Husnaa',
    operationId: 'getAllAsmaa',
    response: getResponse({
      success: {
        docs: {
          type: 'array',
          items: asmaas,
        },
        totalDocs: {
          type: 'number',
          example: 100,
        },
        limit: {
          type: 'number',
          example: 99,
        },
        page: {
          type: 'number',
          example: 1,
        },
        totalPages: {
          type: 'number',
          example: 2,
        },
        pagingCounter: {
          type: 'number',
          example: 1,
        },
        hasPrevPage: {
          type: 'boolean',
          example: false,
        },
        hasNextPage: {
          type: 'boolean',
          example: true,
        },
        prevPage: {
          type: 'number',
          example: 1,
        },
        nextPage: {
          type: 'number',
          example: 1,
        },
      },
    }),
  },
};
