const success = require('../docs/models/hadith');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/hadiths/random',
  schema: {
    tags: ['Hadith'],
    summary: 'Get a random hadit in the list.',
    description: 'Get a random hadit in the list.',
    operationId: 'getRandomHadith',
    response: getResponse({ success }),
  },
};
