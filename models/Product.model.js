const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  type: String,
  color: String,
  size: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('Product', productSchema);

