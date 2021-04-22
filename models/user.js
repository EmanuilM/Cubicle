const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        required:true,
        type:String,
        minlength:5,
        maxlength:20,
        validate: { 
            validator: (v) => { 
                return /^[a-zA-Z0-9]+$/.test(v);
            },
        }
    },
    password : {
        required:true,
        type:String,
        validate: { 
            validator: (v) => { 
                return /^[a-zA-Z0-9]+$/.test(v);
            },
        },
        minlength : 8,
    }
});

module.exports = mongoose.model('user' , userSchema);