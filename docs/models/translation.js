module.exports = {
  title: 'Translation',
  required: ['name', 'description'],
  properties: {
    language: { enum: ['fr', 'ar', 'en'], type: 'string', example: 'en' },
    name: { type: 'string', example: 'Allah' },
    description: { type: 'string', example: 'The Greatest' },
  },
};
