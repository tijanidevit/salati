const success = require('../docs/models/hadith');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/hadiths/:id',
  schema: {
    tags: ['Hadith'],
    summary: 'Finds the hadith by its id in the list.',
    description: 'Finds the hadith by its id in the list.',
    operationId: 'getHaditById',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          default: 1,
          in: 'path',
          description: 'The id of the hadit',
        },
      },
    },
    response: getResponse({
      success,
      validation: {
        message: {
          type: 'string',
          example: 'Id of the hadith is required',
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
          example: 'The hadit cannot be found.',
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
