const success = require('../docs/models/asmaa');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/asmaas/random',
  schema: {
    tags: ['Asmaa'],
    summary: 'Get a random name in the list.',
    description: 'Get a random name in the list.',
    operationId: 'getRandomAsmaa',
    response: getResponse({ success }),
  },
};
