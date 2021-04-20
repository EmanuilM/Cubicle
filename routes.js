const {Router} = require('express');
const router = Router();
const home = require('./controllers/homeController');
const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');

router.use('/' , home); 
router.use('/cubes' , productController); 
router.use('/accessory' , accessoryController); 
router.use('/auth' , authController);

router.get('/auth/logout' , (req,res) => { 
    res.clearCookie('SESSION_TOKEN');
    res.redirect('/');
});


router.get('*' , (req,res) => { 
    res.render('404');
})


module.exports = router;