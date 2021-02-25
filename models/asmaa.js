const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const asmaa = new Schema({
  name: {
    ar: {
      type: String,
      required: false,
    },
    en: {
      type: String,
      required: false,
    },
  },
  number: {
    type: Number,
    required: false,
  },
});

asmaa.plugin(mongoosePaginate);

module.exports = mongoose.model('Asmaa', asmaa);
