const {Router} = require('express');
const router = Router();
const cubeModel = require('../models/cube');
const accessories = require('../models/accessory');
const productService = require('../services/productService');

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

        const cube = await productService.getAccessories(req.params.id);
        console.log(cube);
        res.render('updatedDetailsPage' , {cube});

    // try{
    //     // const cube = await cubeModel.findOne({_id : req.params.id});
    //     const data = await productService.getAccessories(req.params.id);
    //     console.log(data);
        
    //     res.render('updatedDetailsPage' , {cube});

    // }catch { 
    //     res.status(404).render('404');
    // }


});


// async function test() { 
//     let asd = await cubeModel.findById('6078892be8750d30ec7acb1b');
//     let data = asd.accessories;
//     let arr = [];
//     data.forEach(async (x) => { 
//         // console.log(x);
//       let result = await accessories.findById(x)
//       console.log(result);
//     })
//     // console.log(asd.accessories);

//     console.log(arr);
// }

// test();

  

module.exports = router;

