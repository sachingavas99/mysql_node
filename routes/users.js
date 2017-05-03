var express = require('express');
var daoUser = require('../server/dao/userDao');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  var user = req.body;
  daoUser.userDao.addUser(user, function( result ){
    res.json( result );
  });
});

router.post('/auth', function(req, res, next) {
  var user = req.body;
  daoUser.userDao.authenticateUser(user, function( result ){
    if( result.status == true ){
      req.session.authUser = result.user;
    }
    res.json( result.status );
  });
});

module.exports = router;
