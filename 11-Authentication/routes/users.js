var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



//@requires {first Name,last Name password, confirmPassword}-req bode 
// 
// 
// Security ,performance,edge cases
// level -1
//email validate -@.com
// password validate
// passsword==confirmation password
// level-2
// JS//Sql-home work
// level-3 connection to database
// check if email already exists
// password hash
// email lowercase ayasahmad63@gmail.com / AYASAHMAD63@gmail.com




module.exports = router;
