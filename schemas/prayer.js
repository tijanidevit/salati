const success = require('../docs/models/prayer');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/prayer',
  schema: {
    tags: ['Prayer'],
    summary: 'Give you prayer time for the given day',
    description: 'Give you prayer time for the given day',
    operationId: 'prayer',
    response: getResponse({ success }),
  },
};
