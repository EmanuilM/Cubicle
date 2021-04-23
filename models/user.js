const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { 
        required:true,
        type:String,
        minlength: 5,
        maxlength:20,
        validate: { 
            validator: (v) => { 
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message : (props) => { 
               return `Password should consists only English letters and digits`;
            }
        },
    },
    password : {
        required:true,
        type:String,
        minlength : 8,
        validate : { 
            validator : (v) =>  {
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message : (props) => { 
              return  `Password should consists only English letters and digits`
            }
        },
    },
    
});

userSchema.pre('save' , function(next) { 
    bcrypt.genSalt(10)
    .then(salt => {
        return bcrypt.hash(this.password , salt);
    })
    .then(hash => { 
        this.password = hash;
        next();
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = mongoose.model('user' , userSchema);