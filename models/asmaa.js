const { Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Metadata = require('./Metadata');
const Translation = require('./Translation');

const Asmaa = new Schema({
  translations: {
    type: [Translation.schema],
    required: false,
  },
  number: {
    type: Number,
    index: true,
    required: false,
  },
  metadatas: {
    type: [Metadata.schema],
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

Asmaa.plugin(mongoosePaginate);

module.exports = mongoose.model('Asmaa', Asmaa);
