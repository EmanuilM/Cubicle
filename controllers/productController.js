const { Router } = require('express');
const router = Router();
const cubeModel = require('../models/cube');
const userModel = require('../models/user');
const productService = require('../services/productService');
const isGuest = require('../middlewares/guest');
const isAuth = require('../middlewares/isAuth');
const test = require('../middlewares/test');


router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    if (Object.values(req.body).some(x => x === '')) {
        return console.log('All fields are required!');
    }
    try {
        productService.createCube(req.body, req.user._id)
        res.redirect('/');
    } catch {
        res.status(500).end();
    }

});


router.get('/details/:id', async (req, res) => {
    try {
        const cube = await productService.getAccessories(req.params.id);
        const creatorId = cube.creator;
            const isAuthor = creatorId == req.user._id
            res.render('updatedDetailsPage', { cube , isAuthor});
        
    } catch {
        res.redirect('/auth/login');
    }

});

router.get('/edit/:id', isAuth, test , async (req, res) => {
    const cube = await cubeModel.findOne({ _id: req.params.id });

    res.render('editCubePage', { cube });
});

router.post('/edit/:id', isAuth, async (req, res) => {
    const oldData = await cubeModel.findOne({ _id: req.params.id });
    productService.updateCube(oldData, req.body);

    res.redirect('/');
});

router.get('/delete/:id', isAuth, async (req, res) => {
    const cube = await cubeModel.findOne({ _id: req.params.id });

    res.render('deleteCubePage', { cube });
});

router.post('/delete/:id', isAuth, async (req, res) => {
    const cube = await cubeModel.findOne({ _id: req.params.id });
    productService.deleteCube(cube);
    res.redirect('/');

});



module.exports = router;

