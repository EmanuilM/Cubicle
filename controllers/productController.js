const {Router} = require('express');
const router = Router();
const cubeModel = require('../models/cube');
const productService = require('../services/productService');
const isGuest = require('../middlewares/guest');
const isAuth = require('../middlewares/isAuth');


router.get('/create' ,  isAuth , (req,res) => { 
    res.render('create');
});

router.post('/create' , isAuth ,  async (req,res) => { 
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

router.get('/edit/:id' , isAuth ,  async (req,res) => { 
    const cube = await cubeModel.findOne({_id:req.params.id});

        res.render('editCubePage' , {cube});
});

router.post('/edit/:id' , isAuth ,  async (req,res) => { 
    const oldData = await cubeModel.findOne({_id:req.params.id});
    productService.updateCube(oldData , req.body);

    res.redirect('/');
}); 

router.get('/delete/:id' , isAuth ,  async (req,res) => { 
    const cube = await cubeModel.findOne({_id:req.params.id});

    res.render('deleteCubePage' , {cube});
});

router.post('/delete/:id' , isAuth ,  async (req,res) => { 
    const cube = await cubeModel.findOne({_id:req.params.id});
    productService.deleteCube(cube);
    res.redirect('/');

});



module.exports = router;

