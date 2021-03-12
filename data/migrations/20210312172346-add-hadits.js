const hadiths = require('../salati/hadiths.json');
const Hadith = require('../../models/Hadith');

async function addHadith(hadith, db) {
  return db.collection('hadiths').insert(hadith);
}

module.exports = {

  async up(db, next) {
    await hadiths.map(async (payload) => {
      const hadith = new Hadith(payload);
      await addHadith(hadith, db);
    });
    next();
  },

  down(db, next) {
    next();
  },

};
