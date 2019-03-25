const express = require('express');
const app = express();
const mainRouter = express.Router();



mainRouter.route('/').get(function (req, res) {
    res.render('หน้าหลัก');
});
module.exports = mainRouter;