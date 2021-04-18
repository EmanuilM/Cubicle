const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },

    imageUrl : {
        type:String,
        required:true,
        validate :/^https?/,
    },

    description : {
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('accessory' , accessorySchema)