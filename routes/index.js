const express = require('express');

const router = express.Router();
const homecontroller = require('../controllers/home_controller')
console.log(('router loaded'));

router.get('/', homecontroller.home);
router.use('/users', require('./users'));

//for any further routes acces from here
//router.use('/routerName' , require('./routerfile) );

module.exports = router; //app.get app.post  handled by this module