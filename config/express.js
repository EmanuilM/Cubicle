const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const app = express();

module.exports = (app) => {

    //TODO: Setup the view engine
    app.engine('hbs', handlebars({
        extname: 'hbs',
    }));
    app.set('view engine' , 'hbs');

    //TODO: Setup the body parser
    app.use(express.urlencoded({extended:true}));

    //TODO: Setup the static files
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(auth);


};