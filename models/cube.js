class Cube { 
    constructor(id,name,description,imageUrl,level) { 
        Object.assign(this , {id,name,description,imageUrl,level});
    }
}

module.exports = Cube;