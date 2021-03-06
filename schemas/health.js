const success = require('../docs/models/health');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/health',
  schema: {
    tags: ['Health'],
    summary: 'Ping the server to get a health',
    description: 'Ping the server to get a health',
    operationId: 'health',
    response: getResponse({ success }),
  },
};
