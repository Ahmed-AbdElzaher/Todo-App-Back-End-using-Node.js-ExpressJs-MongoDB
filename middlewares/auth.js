const jwt = require('jsonwebtoken');
const User = require('../models/user')

const auth = (req, res, next) => {
    const {authorization} = req.headers
    const payload = jwt.verify(authorization , 'cdgisqekkh74g')
    
    User.findOne({userName: payload.userName})
    .then(user => {
        req.user = user;
        next();
    })
}

module.exports = auth;