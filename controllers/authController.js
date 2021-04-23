const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');

router.get('/login' ,async (req,res) => { 
    res.render('loginPage');
});

router.post('/login' ,async (req,res) => { 
    try { 
        const token = await authService.login(req.body);
        res.cookie('SESSION_TOKEN' , token);
        res.redirect('/');
    }catch (message) {
        res.render('loginPage' , {message});
    }
   
});


router.get('/register' ,async (req,res) => { 
        res.render('registerPage');
});

router.post('/register' ,async (req,res) => { 
    if(req.body.username.length < 5) { 
        return res.render('registerPage' , {message : {message : 'Username must be at least 5 characters long!'}})
    }
    if(req.body.password.length < 8 ) { 
        return res.render('registerPage' , {message : {message : 'Password must be at least 8 characters long!'}})
    }
    if(req.body.password !== req.body.repeatPassword) { 
        return res.render('registerPage' , {message : {message : 'Passwords do not match!'}})
    }

        authService.register(req.body);
        res.redirect('/auth/login');
    
});

module.exports = router;