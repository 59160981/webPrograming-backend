const express = require('express');
const app = express();
const billRouter = express.Router();
const Regis = require('../models/registration');
const Order = require('../models/order');
const Custo = require('../models/customer');
const Orderde = require('../models/orderDetail');
const Emp = require('../models/employee');


billRouter.route('/d2').get(function (req, res) {
  Regis.findOne({ ID_registration: 1 }, function (err, regis) {
    console.log(regis)
    Order.findOne({ ID_order: regis.ID_order }, function (err, order) {
      console.log()
      Custo.findOne({ ID_customer: order.ID_customer }, function (err, custo) {
        console.log()
        Orderde.find({ ID_order: order.ID_order }, function (err, orderde) {
          console.log()
          Emp.findOne({ ID_employee: order.ID_employee }, function (err, emp) {
            console.log()
            res.render('ใบเสร็จการเดินทะเบียน', { custo: custo, regis: regis, orderde: orderde, emp: emp });
          });
        });
      });
    });
  });
});
module.exports = billRouter;