const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const verse = new Schema({
  text: {
    type: String,
    required: false,
  },
  number: {
    type: Number,
    required: false,
  }
});

verse.plugin(mongoosePaginate);

module.exports = mongoose.model('Verses', verse);
