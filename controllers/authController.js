const { Router } = require('express');
const cookie = require('cookie-parser');
const router = Router();

const authService = require('../services/authService');

router.get('/login' ,async (req,res) => { 
    res.render('loginPage');
});

router.post('/login' ,async (req,res) => { 
    const token = await authService.login(req.body);
    res.cookie('SESSION_TOKEN' , token);
    res.redirect('/');
});


router.get('/register' ,async (req,res) => { 
    res.render('registerPage');
});

router.post('/register' ,async (req,res) => { 
        authService.register(req.body);
        res.redirect('/login');
    
});

module.exports = router;