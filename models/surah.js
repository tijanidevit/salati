const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Verse = require('./verse');

const { Schema } = mongoose;

const surah = new Schema({
  index: {
    required: false,
    type: Number,
  },
  title: {
    type: String,
    required: false,
  },
  verses: {
    required: false,
    type: [Verse.Schema],
  },
  count: {
    required: false,
    type: Number,
  },
});

surah.plugin(mongoosePaginate);

module.exports = mongoose.model('Surahs', surah);
