const pagination = require('./pagination');
const hadiths = require('../docs/models/hadith');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/hadiths',
  schema: {
    tags: ['Hadith'],
    summary: 'Give all the hadiths',
    description: 'Give all the hadiths',
    operationId: 'getAllHadith',
    response: getResponse({
      success: pagination(hadiths),
    }),
  },
};
