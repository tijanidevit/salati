const metadata = require('./metadata');
const translation = require('./translation');

module.exports = {
  title: 'Asmaa',
  properties: {
    number: { type: 'number', example: '1' },
    translations: { type: 'array', items: translation },
    metadatas: { type: 'array', items: metadata },
    createdAt: { type: 'string', format: 'date-time', example: '2021-03-01T20:48:04+01:00' },
    updatedAt: { type: 'string', format: 'date-time', example: '2021-03-01T20:48:04+01:00' },
  },
};
