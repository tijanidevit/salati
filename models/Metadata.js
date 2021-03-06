const { Schema, model } = require('mongoose');

const Metadata = new Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = model('Metadata', Metadata);
