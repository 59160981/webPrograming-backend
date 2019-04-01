const express = require('express');
const app = express();
const regisRouter = express.Router();
const Regis = require('../models/registration');
const Order = require('../models/order');
const Custo = require('../models/customer');
const Orderde = require('../models/orderDetail');
const Emp = require('../models/employee');

//เปิดหน้าปกติ
regisRouter.route('/d1').get(function (req, res) {
  Custo.find(function (err, custo) {
    res.render('บันทึกลูกค้า3', { custo: custo , notFound : false });
  });
});
//แอดข้อมูล
regisRouter.route('/d1').post(function (req, res) {
  Custo.find(function (err, custo) {
  var idCustomer = custo.length + 1;
  var firstname = req.body.CustomerName;
  var lastname = req.body.Customerlastname;
  var birthday = req.body.CustomerBirth;
  var sex = req.body.CustomerSex;
  var home = req.body.CustomerHome;
  var Tel = req.body.CustomerTel;
  var Email = req.body.CustomerEmail;
  var Type = req.body.CustomerType;
  const DataUser = new Custo({
                              ID_customer: idCustomer,
                              firstname: firstname,
                              lastname: lastname,
                              birthday: birthday,
                              gender: sex,
                              address: home,
                              telephone: Tel,
                              email: Email,
                              customer_type: Type
                            });
    console.log(DataUser);
    DataUser.save();
    res.redirect('/registration/d1')
  });
});
//ค้นหา
regisRouter.route('/d1-search').post(function (req, res) {
  var search = req.body.search; //สิ่งที่ต้องการค้นหา
  if(search == ""){
    res.redirect('/registration/d1')
  }else{
    Custo.find({ID_customer:search},function (err, custo) {
      if(err){
        Custo.find(function (err, custo) {
          res.render('บันทึกลูกค้า3', { custo:"" , notFound : true });
        });
      }
      else if(custo == ""){
        res.render('บันทึกลูกค้า3', { custo: custo , notFound : true  });
      }else{
        res.render('บันทึกลูกค้า3', { custo: custo , notFound : false  });
      }
      
    });
  }
});
//ใบเสร็จการเดินทะเบียน
regisRouter.route('/d2').get(function (req, res) {
  Regis.findOne({ ID_registration: 1 }, function (err, regis) {
    Order.findOne({ ID_order: regis.ID_order }, function (err, order) {
      Custo.findOne({ ID_customer: order.ID_customer }, function (err, custo) {
        Orderde.find({ ID_order: order.ID_order }, function (err, orderde) {
          Emp.findOne({ ID_employee: order.ID_employee }, function (err, emp) {
            res.render('ใบเสร็จการเดินทะเบียน', { custo: custo, regis: regis, orderde: orderde, emp: emp });
          });
        });
      });
    });
  });
});
module.exports = regisRouter;