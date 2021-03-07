const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

module.exports = model('Asmaas', Asmaa);
