const asmaas = require('../salati/asmaas.json');
const Asmaa = require('../../models/Asmaa');

async function addAsmaa(asmaa, db) {
  return db.collection('asmaas').insert(asmaa);
}

module.exports = {

  async up(db, next) {
    await asmaas.map(async (payload) => {
      const asmaa = new Asmaa({
        number: payload.number,
        translations: [
          {
            language: 'en',
            name: payload.name.en,
            description: '',
          },
          {
            language: 'ar',
            name: payload.name.ar,
            description: '',
          },
        ],
        metadatas: [],
      });
      await addAsmaa(asmaa, db);
    });
    next();
  },

  down(db, next) {
    next();
  },

};
