const {Router} = require('express');
const router = Router();
const home = require('./controllers/homeController');
const about = require('./controllers/about');
const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');

router.use('/',home);
router.use('/about',about);
router.get('/create',productController);
router.post('/create',productController);
router.get('/details/:id',productController);
router.get('/create/accessory',accessoryController);
router.post('/create/accessory',accessoryController);

router.get('*' , (req,res) => { 
    res.render('404');
})


module.exports = router;