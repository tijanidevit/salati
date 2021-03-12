const asmaas = require('../docs/models/asmaa');
const pagination = require('./pagination');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/asmaas',
  schema: {
    tags: ['Asmaa'],
    summary: 'Give all the Asmaa ul Husnaa',
    description: 'Give all the Asmaa ul Husnaa',
    operationId: 'getAllAsmaa',
    response: getResponse({
      success: pagination(asmaas),
    }),
  },
};
