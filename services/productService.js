const data = require('../models/cube');
const Accessory = require('../models/accessory');
const Cube = require('../models/cube');

async function attachAccessory(productId, accessoryId) {
    let product = await Cube.findById(productId)
    let accessry = await Accessory.findById(accessoryId);
//    console.log(accessry,accessoryId)
console.log(accessry)

    product.accessories.push(accessry);
    return product.save();
}

async function getAll (query)  {
    let products = await data.find({});
    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        products = products.filter(x => Number(x.level) >= query.from);
    }

    if (query.to) {
        products = products.filter(x => Number(x.level) <= query.to);
    }
    return products;
}

module.exports = { 
    attachAccessory,
    getAll,
}