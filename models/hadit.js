const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const hadit = new Schema({
  language: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
});

hadit.plugin(mongoosePaginate);

module.exports = mongoose.model('Hadits', hadit);
