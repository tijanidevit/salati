const { getResponse } = require('../lib/responses');

module.exports = {
  method: 'GET',
  url: '/asmaas',
  schema: {
    tags: ['Asmaa'],
    params: {
      type: 'object',
      properties: {},
    },
    response: getResponse({
      success: {
        number: { example: 1, type: 'number' },
      },
    }),
  },
};
