const {Router} = require('express');
const router = Router();
const cubeModel = require('../models/cube');

//Setup create page view

router.get('/create' , (req,res) => { 
    res.render('create');
});

// Setup create router

router.post('/create' , (req,res) => { 
    if(Object.values(req.body).some(x => x === '')) { 
        return console.log('All fields are required!');
    }
    // saveToDb(req,res,new cubeMaker(Object.assign(req.body , {id : uniqueId()})));

    let createdCube = new cubeModel(req.body);
    createdCube.save();
    res.redirect('/');




});

// Setup details router

router.get('/details/:id' , async (req,res) => { 
    // const id = req.params.id;
    // const cube = db.find(x=> x.id === id);
     
    // res.render('updatedDetailsPage' , {cube});
    try{
        const cube = await cubeModel.findOne({_id : req.params.id});
        res.render('updatedDetailsPage' , {cube});

    }catch { 
        res.status(404).render('404');
    }
    


});


  

module.exports = router;

