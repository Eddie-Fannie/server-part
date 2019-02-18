var express = require('express');
var router = express.Router();

var userControler = require('../control/userControl')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 注册账号的接口 /api为代理的服务
router.post('/api/signUp',userControler.signUp)

module.exports = router;
