const data = require('../models/cube');
const Accessory = require('../models/accessory');
const Cube = require('../models/cube');

async function attachAccessory(productId, accessoryId) {
    let product = await Cube.findById(productId)
    let accessry = await Accessory.findById(accessoryId);

    product.accessories.push(accessry);
    return product.save();
}

async function createCube(data,userId) { 
    let cube = await Cube({...data, creator:userId});
   return cube.save();
}

async function getAllUnatachedProducts(ids) { 
    return Accessory.find({ _id : {$nin: ids}});
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

async function getAccessories(id) { 
    return  Cube.findById(id).populate('accessories');
}

async function updateCube (oldData , newData) {
    if(newData.name === '' || newData.description === '' || newData.imageUrl === '') { 
        throw Error('All fields are required!');
    }
    const updatedData = await Cube.updateOne(oldData , newData);
    return updatedData;
}

async function deleteCube (data) { 
   return await Cube.deleteOne({_id:data._id});
}

module.exports = { 
    attachAccessory,
    getAll,
    getAccessories,
    getAllUnatachedProducts,
    updateCube,
    deleteCube,
    createCube,
}