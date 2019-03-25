const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderDetail = new Schema({
    ID_orderDetail: {
    type: Number
  },
  ID_order: {
     type: Number
  },
  ID_product: {
    type: String
  },
  price: {
    type: String
  },
  amount: {
    type: Number
  }
},

{
    collection: 'TRN_orderDetail'
});

module.exports = mongoose.model('OrderDetail', OrderDetail);