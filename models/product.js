const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    ID_product: {
    type: String
  },
  date: {
     type: Number
  },
  details: {
    type: Number
  },
  color: {
    type: String
  },
  
  price: {
    type: Number
  },
  amount: {
    type: Number
  },
  product_type: {
    type: Number
  }
},

{
    collection: 'TRN_product'
});

module.exports = mongoose.model('Product', Product);