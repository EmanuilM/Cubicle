const bcrypt = require('bcrypt');
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

module.exports = {
    register,
}