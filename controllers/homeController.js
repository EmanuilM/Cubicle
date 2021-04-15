const { Router } = require('express');
const router = Router();
const cubes = require('../models/cube');
const productService = require('../services/search');




//Setup home page router
router.get('/', async (req, res) => {
 
    try { 
        const products = await cubes.find({});
        res.render('home', {products});
    }catch { 
        res.status(500).end();
    }


});

//Setup search router




//export module
module.exports = router;