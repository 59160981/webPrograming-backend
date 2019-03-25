const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    ID_order: {
    type: Number
  },
  ID_employee: {
     type: Number
  },
  ID_customer: {
    type: Number
  },
  details: {
    type: String
  },
  totalamount: {
    type: Number
  },
  totalprice: {
    type: Number
  },
  order_type: {
    type: String
  }
},

{
    collection: 'TRN_order'
});

module.exports = mongoose.model('Order', Order);