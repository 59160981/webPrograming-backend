const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    ID_customer: {
    type: Number
  },
  firstname: {
     type: String
  },
  lastname: {
    type: String
  },
  birthday: {
    type: String
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  telephone: {
    type: String
  },
  email: {
    type: String
  },
  customer_type: {
    type: String
  }
},

{
    collection: 'MST_customer'
});

module.exports = mongoose.model('Customer', Customer);