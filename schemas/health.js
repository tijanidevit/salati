const { getResponse } = require('../lib/responses');

module.exports = {
  method: 'GET',
  url: '/health',
  schema: {
    tags: ['Health'],
    params: {
      type: 'object',
      properties: {},
    },
    response: getResponse({
      success: {
        version: { example: '1.0.0', type: 'string' },
        name: { example: 'salati', type: 'string' },
        description: { example: 'Server for salt application.', type: 'string' },
        author: { example: 'Hamza Mounir <hamza.pixelle@gmail.com>', type: 'string' },
        website: { example: 'http://salat.hmounir.com', type: 'string' },
        bugs: { example: 'https://github.com/hamzaPixl/salati/issues', type: 'string' },
      },
    }),
  },
};
