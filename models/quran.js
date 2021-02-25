const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const quran = new Schema({
  language: {
    type: String,
    required: false,
  },
  surahs: {
    type: [Surah.Schema],
    required: false,
  },
});

quran.plugin(mongoosePaginate);

module.exports = mongoose.model('Quran', quran);
