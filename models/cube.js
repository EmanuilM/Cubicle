const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type:String,
        required : true,
        minlength : 5,
    },
    description: {
        type: String,
        required : true,
    },
    imageUrl : {
        type: String,
        required : true,
        validate : /^https?/,

    },
    level : {
        type: Number,
        required : true,
        min: 1,
        max : 6,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'accessory'
    }],
    creator : {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    }
})

module.exports = mongoose.model('Cube',cubeSchema);