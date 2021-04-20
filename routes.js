const {Router} = require('express');
const router = Router();
const home = require('./controllers/homeController');
const about = require('./controllers/about');
const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
//main routes
router.use('/',home);
router.use('/about',about);

//products routes
router.get('/create',productController);
router.post('/create',productController);
router.get('/details/:id',productController);

//Accessories routes
router.get('/create/accessory',accessoryController);
router.post('/create/accessory',accessoryController);
router.get('/attach/accessory/:id',accessoryController);
router.post('/attach/accessory/:id',accessoryController);

//auth routes 
router.get('/login' , authController);
router.get('/register' , authController);
router.post('/login' , authController);
router.post('/register' , authController);

//error routes

router.get('*' , (req,res) => { 
    res.render('404');
})


module.exports = router;