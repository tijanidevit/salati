const metadata = require('./metadata');
const translation = require('./translation');

module.exports = {
  title: 'Hadith',
  properties: {
    id: { type: 'number', example: 1 },
    title: { type: 'string', example: 'Parents' },
    author: { type: 'string', example: 'Al-Albani' },
    source: { type: 'string', example: 'Al-Adab Al-Mufrad 1' },
    link: { type: 'string', example: 'https://sunnah.com/adab:1' },
    translations: { type: 'array', items: translation },
    metadatas: { type: 'array', items: metadata },
    createdAt: { type: 'string', format: 'date-time', example: '2021-03-01T20:48:04+01:00' },
    updatedAt: { type: 'string', format: 'date-time', example: '2021-03-01T20:48:04+01:00' },
  },
};
