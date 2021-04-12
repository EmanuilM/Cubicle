const {Router} = require('express');
const router = Router();
const cubes = require('../config/db.json');

//Setup home page router
router.get('/' , (req,res) => { 
    res.render('home' , {cubes});
});

//Setup search router


//export module
module.exports = router;