const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Metadata = require('./Metadata');
const Translation = require('./Translation');

const Hadith = new Schema({
  translations: {
    type: [Translation.schema],
    required: false,
  },
  id: {
    type: Number,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  link: {
    type: String,
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

Hadith.plugin(mongoosePaginate);

module.exports = model('Hadiths', Hadith);
