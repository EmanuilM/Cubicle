const {Router} = require('express');
const cubeMaker = require('../models/cube');
const uniqueId = require('uniqid');
const router = Router();

//Setup create page view

router.get('/create' , (req,res) => { 
    res.render('create');
});

// Setup create router

router.post('/create' , (req,res) => { 
    const cube = new cubeMaker(Object.assign(req.body , {id : uniqueId()}));
    res.send(cube);
});



module.exports = router;

