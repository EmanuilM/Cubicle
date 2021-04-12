const {Router} = require('express');
const cubeMaker = require('../models/cube');
const uniqueId = require('uniqid');
const router = Router();
const fs = require('fs');
const db = require('../config/db.json');
const path = require('path');
const saveToDb = require('../controllers/saveDataToDb');

//Setup create page view

router.get('/create' , (req,res) => { 
    res.render('create');
});

// Setup create router

router.post('/create' , (req,res) => { 
    saveToDb(req,res,new cubeMaker(Object.assign(req.body , {id : uniqueId()})));
});

module.exports = router;

