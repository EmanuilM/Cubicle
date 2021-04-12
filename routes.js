const {Router} = require('express');
const router = Router();
const home = require('./controllers/homeController');
const about = require('./controllers/about');
const productController = require('./controllers/productController');

router.get('/',home);
router.get('/about',about);
router.get('/create',productController);


module.exports = router;