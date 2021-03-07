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
    response: getResponse({ success }),
  },
};
