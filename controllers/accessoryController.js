const {Router} = require('express');
const accessoryModel = require('../models/accessory');
const cubeModel = require('../models/cube');
const router = Router();
const productService = require('../services/productService');
const isGuest = require('../middlewares/guest');
const isAuth = require('../middlewares/isAuth');



router.get('/create' , isAuth ,  (req,res) => { 
    res.render('createAccessory');
});

router.get('/attach/:id' , isAuth , async (req,res) => { 
    try{
        const cube = await cubeModel.findOne({_id : req.params.id});
        const accessories = await productService.getAllUnatachedProducts(cube.accessories);

        const isCreator = await productService.isOwner(cube.creator , req.user._id);
        if(isCreator) { 
            return res.redirect('/');
        }

        res.render('attachAccessory' , {cube , accessories});
    }catch{
        res.status(404).render('404');
    }
  
});

router.post('/attach/:id' , isAuth , async (req,res) => { 
  productService.attachAccessory(req.params.id , req.body.accessory)
  .then(()=> res.redirect(`/cubes/details/${req.params.id}`));

    
});


router.post('/create' , isAuth ,  async (req,res) => { 
    try { 
        const createAccessory = new accessoryModel(req.body);
        createAccessory.save();
        res.redirect('/');
    } catch { 
        res.render('404')
    }
   
});

module.exports = router;