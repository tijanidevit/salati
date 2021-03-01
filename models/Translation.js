const config = require('config');
const { Schema } = require('mongoose');

const Translation = new Schema({
  language: {
    type: String,
    enum: config.get('languages'),
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Translation', Translation);
