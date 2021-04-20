const { Router } = require('express');
const router = Router();
const cubes = require('../models/cube');
const productService = require('../services/productService');


router.get('/', async (req, res) => {
        productService.getAll(req.query)
        .then(products => {
            res.render('home', {products});

        }).catch(() => { 
            res.status(500).end();

        })

});

router.get('/about' , (req,res) => { 
    res.render('about');
});


module.exports = router;