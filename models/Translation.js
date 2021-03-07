const { Schema, model } = require('mongoose');

const Translation = new Schema({
  language: {
    type: String,
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

module.exports = model('Translation', Translation);
