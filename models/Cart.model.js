const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart'
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: Number,
    size: String,
    color: String,
  }],
  status: {
    type: String,
    enum: ['Unpaid', 'Processing', 'Shipped', 'Review', 'Returns'],
    default: 'Unpaid'
  },
  paymentMethod: String,
  shippingAddress: {
    addressLine1: String,
    addressLine2: String,
    city: String,
    country: String,
    postalCode: String
  },
});

module.exports = mongoose.model('Order', orderSchema);
