const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cfg = require('../config/config');
const userModel = require('../models/user');


async function register(userData) {
    if (userData.password !== userData.repeatPassword) {
        throw Error('Passwords do not match!');
    }

    const isUserExists = await userModel.findOne({ username: userData.username });
    if (isUserExists) {
        throw Error('This user already exists!');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userData.password, salt);
    const user = new userModel({ username: userData.username, password: hash });
    return user.save();

}


async function login(userData) {
    const isUserExists = await userModel.findOne({ username: userData.username });
    if (!isUserExists) {
        throw Error('This user does not exists!');
    }
    
   const isPasswordMatch =  await bcrypt.compare(userData.password , isUserExists.password);
   if(!isPasswordMatch) { 
       throw Error('Invalid Password!');
   }

   const token = jwt.sign({_id : isUserExists._id , roles:['user']} , cfg.development.SECRET);

   return token;
}



module.exports = {
    register,
    login,
}