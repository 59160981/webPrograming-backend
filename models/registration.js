const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Registration = new Schema({
  ID_registration: {
    type: Number
  },
  ID_order: {
     type: Number
  },
  details: {
    type: String
  },
  date: {
    type: String
  }
},

{
    collection: 'TRN_registration'
});

module.exports = mongoose.model('Registration', Registration);