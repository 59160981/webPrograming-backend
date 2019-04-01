const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Invoice = new Schema({
    ID_invoice: {
    type: Number
  },
  ID_order: {
     type: Number
  },
  details: {
    type: String
  },
  price: {
    type: Number
  },
  VAT: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  invoice_type: {
    type: String
  }
},

{
    collection: 'TRN_invoice'
});

module.exports = mongoose.model('Invoice', Invoice);