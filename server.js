const express = require('express');
const app = express();
const port = 3000;
const billRouter = require('./routes/billRouter');
const mainRouter = require('./routes/mainRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://webappG:abc1234@ds053186.mlab.com:53186/webapp');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/bill', billRouter);
app.use('/home', mainRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});