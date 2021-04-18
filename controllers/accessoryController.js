const {Router} = require('express');
const accessoryModel = require('../models/accessory');
const cubeModel = require('../models/cube');
const router = Router();
const productService = require('../services/productService');


router.get('/create/accessory' , (req,res) => { 
    res.render('createAccessory');
});

router.get('/attach/accessory/:id' ,async (req,res) => { 
    try{
        const cube = await cubeModel.findOne({_id : req.params.id});
        console.log(cube);
        const accessories = await productService.getAllUnatachedProducts(cube.accessories);
        res.render('attachAccessory' , {cube , accessories});
    }catch{
        res.status(404).render('404');
    }
  
});

router.post('/attach/accessory/:id' ,async (req,res) => { 
  productService.attachAccessory(req.params.id , req.body.accessory)
  .then(()=> res.redirect(`/details/${req.params.id}`));

    
});


router.post('/create/accessory' , (req,res) => { 
    const createAccessory = new accessoryModel(req.body);
    createAccessory.save();
    res.redirect('/');
});

module.exports = router;