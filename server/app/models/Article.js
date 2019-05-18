const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 100000,
  },
  price: {
    type: Number,
    required: true,
    maxlength: 255,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  shipping: {
    type: Boolean,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  wood: {
    type: Schema.Types.ObjectId,
    ref: 'Wood',
    required: true,
  },
  frets: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
    maxlength: 100,
    default: 0,
  },
  publish: {
    type: Boolean,
    required: true,
  },
  images: {
    type: Array,
    default: [],
  },
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
