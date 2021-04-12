const {Router} = require('express');
const router = Router();

//Setup home page router
router.get('/' , (req,res) => { 
    res.render('home');
});
//Setup search router


//export module
module.exports = router;