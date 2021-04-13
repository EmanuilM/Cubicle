const { Router } = require('express');
const router = Router();
const cubes = require('../config/db.json');
const productService = require('../services/search');



//Setup home page router
router.get('/', async (req, res) => {
    productService.getAll(req.query)
        .then(products => {
            res.render('home', { products });
        })
        .catch(() => res.status(500).end())

   


});

//Setup search router




//export module
module.exports = router;