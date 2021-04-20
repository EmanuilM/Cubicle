const {Router} = require('express');
const router = Router();
const cubeModel = require('../models/cube');
const productService = require('../services/productService');


router.get('/create' , (req,res) => { 
    res.render('create');
});


router.post('/create' , (req,res) => { 
    if(Object.values(req.body).some(x => x === '')) { 
        return console.log('All fields are required!');
    }

    let createdCube = new cubeModel(req.body);
    createdCube.save();
    res.redirect('/');




});


router.get('/details/:id' , async (req,res) => { 
    try{
        const cube = await productService.getAccessories(req.params.id);
        console.log(cube);
        res.render('updatedDetailsPage' , {cube});

    }catch{
        res.status(500).end();
    }

});



module.exports = router;

