const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
    name: String,
    imageUrl : String,
    description : String,
});

module.exports = accessorySchema.model('accessory' , accessorySchema)