const { Schema } = require('mongoose');

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

module.exports = mongoose.model('Metadata', Metadata);
