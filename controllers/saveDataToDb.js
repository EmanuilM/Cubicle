const db = require('../config/db.json');
const fs = require('fs');
const path = require('path');




module.exports = (req,res,data) => { 
    db.push(data);
    fs.writeFile(path.join(__dirname , '../config/db.json') , JSON.stringify(db) , (err) => { 
        if(err) { 
           return console.log(err);
        }
    })
    res.status(201).redirect('/');
}