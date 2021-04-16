const data = require('../models/cube');

async function getAll (query)  {
    let products = await data.find({});
   console.log(products);
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
    getAll,
}