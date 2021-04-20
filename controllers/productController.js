const {Router} = require('express');
const router = Router();
const cubeModel = require('../models/cube');
const productService = require('../services/productService');


router.get('/create' , (req,res) => { 
    res.render('create');
});

router.post('/create' , async (req,res) => { 
    if(Object.values(req.body).some(x => x === '')) { 
        return console.log('All fields are required!');
    }
    try { 

        let createdCube = new cubeModel(req.body);
        createdCube.save();
        res.redirect('/');
    }catch { 
        console.log('error');
    }

});


router.get('/details/:id' , async (req,res) => { 
    try{
        const cube = await productService.getAccessories(req.params.id);
        res.render('updatedDetailsPage' , {cube});

    }catch{
        res.status(500).end();
    }

});

router.get('/edit/:id' , async (req,res) => { 
        res.render('editCubePage');
});

router.post('/edit/:id' , async (req,res) => { 
    const oldData = await cubeModel.findOne({_id:req.params.id});
    productService.updateCube(oldData , req.body);
    res.redirect('/');
}); 



module.exports = router;

