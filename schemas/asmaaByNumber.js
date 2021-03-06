const success = require('../docs/models/asmaa');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/asmaas/:number',
  schema: {
    tags: ['Asmaa'],
    summary: 'Finds the name by its number in the list. 1-99',
    description: 'Finds the name by its number in the list. 1-99',
    operationId: 'getAsmaaByNumber',
    params: {
      type: 'object',
      properties: {
        number: {
          type: 'string',
          default: 1,
          in: 'path',
          description: 'The number of the name',
        },
      },
    },
    response: getResponse({
      success,
      validation: {
        message: {
          type: 'string',
          example: 'Id of the name is invalid must be between 1-99 included',
        },
        code: {
          type: 'string',
          example: 'VALIDATION_ERROR',
        },
        name: {
          type: 'string',
          example: 'ValidationError',
        },
      },
      notFound: {
        message: {
          type: 'string',
          example: 'The name cannot be found.',
        },
        code: {
          type: 'number',
          example: 404,
        },
        name: {
          type: 'string',
          example: 'NotFoundError',
        },
      },
    }),
  },
};
