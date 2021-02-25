const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const juz = new Schema({
  index: {
    type: Number,
    required: false,
  },
  start: {
    index: {
      type: Number,
      required: false,
    },
    verse: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
  end: {
    index: {
      type: Number,
      required: false,
    },
    verse: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
});

juz.plugin(mongoosePaginate);

module.exports = mongoose.model('Juzz', juz);
