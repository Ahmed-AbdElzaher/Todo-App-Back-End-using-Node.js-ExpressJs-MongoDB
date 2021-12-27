const { query } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const bcrypt = require("bcryptjs");

const login = async ({userName, password}) => {
    const user = await User.findOne({userName}).exec();
    const isValid = await user.comparePassword(password);
    if(!isValid) {
        throw new Error('UN_AUTH')
    }else{
        // const {secret} = process.env 
    const token = jwt.sign({
            userName, _id: user.id,
            maxAge:'1d'
        }, 'cdgisqekkh74g')
        return token;
    }
}

const find = (query) => User.find(query)

const findUser = (id) => User.find({_id: id})

const deleteUser = (id) => User.deleteOne({_id: id})

const update = (id, body) => User.updateOne({_id: id}, body)

module.exports = {
    login,
    find,
    findUser,
    deleteUser,
    update
}