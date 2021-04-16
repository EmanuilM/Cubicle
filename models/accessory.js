const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
    name: String,
    imageUrl : String,
    description : String,
});