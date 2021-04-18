const {Router} = require('express');
const accessoryModel = require('../models/accessory');
const cubeModel = require('../models/cube');
const router = Router();


router.get('/create/accessory' , (req,res) => { 
    res.render('createAccessory');
});

router.get('/attach/accessory/:id' ,async (req,res) => { 
    // let test = await cubeModel.findById(req.params.id).populate('accessories').lean();
    console.log(req);
});


router.post('/create/accessory' , (req,res) => { 
    const createAccessory = new accessoryModel(req.body);
    createAccessory.save();
    res.redirect('/');
});

module.exports = router;