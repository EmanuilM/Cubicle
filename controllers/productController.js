const {Router} = require('express');
const cubeMaker = require('../models/cube');
const uniqueId = require('uniqid');
const router = Router();
const fs = require('fs');
const db = require('../config/db.json');
const path = require('path');

//Setup create page view

router.get('/create' , (req,res) => { 
    res.render('create');
});

// Setup create router

router.post('/create' , (req,res) => { 
    const cube = new cubeMaker(Object.assign(req.body , {id : uniqueId()}));
    console.log(cube);
    db.push(cube);
    fs.writeFile(path.join(__dirname , '../config/db.json') , JSON.stringify(db) , (err) => { 
        if(err) { 
           return console.log(err);
        }
    })
    res.status(201).redirect('/');
});

module.exports = router;

