module.exports = {
  title: 'Asmaa',
  properties: {
    number: { type: 'number', example: '1' },
    translations: { type: 'array', items: { $ref: '#/definitions/Translation' } },
    metadatas: { type: 'array', items: { $ref: '#/definitions/Metadata' } },
    createdAt: { type: 'string', format: 'date-time', example: '2021-03-01T20:48:04+01:00' },
    updatedAt: { type: 'string', format: 'date-time', example: '2021-03-01T20:48:04+01:00' },
  },
};
