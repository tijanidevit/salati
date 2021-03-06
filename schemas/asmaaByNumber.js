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
    parameters: [
      { name: 'number', in: 'path', description: 'The number of the name', required: true, type: 'number', default: 1 },
    ],
    response: getResponse({ success }),
  },
};
