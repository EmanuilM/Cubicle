const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl : String,
    level : Number,
})

module.exports = mongoose.model('Cube',cubeSchema);