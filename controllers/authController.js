const { Router } = require('express');
const router = Router();

const authService = require('../services/authService');

router.get('/login' , (req,res) => { 
    res.render('loginPage');
});

router.post('/register' , (req,res) => { 
    authService.register(req.body);
    res.redirect('/login');
});

router.get('/register' , (req,res) => { 
    res.render('registerPage');
});


module.exports = router;