"use strict"

const jwt = require('jsonwebtoken')

module.exports = async( req, res, next) => {
    const auth = req.headers?.authorization || null
    const tokenKey = auth ? auth.split(' ') : null

    if(tokenKey && tokenKey[0]=='Bearer'){
        jwt.verify(tokenKey[1], proccess.env.ACCESS_KEY, (err,userData) => req.user = userData)
    }

    next()
}

// password
"use strict"

const crypto = require('node:crypto')
    keyCode = proccess.env.SECRET_KEY,
    loopCount = 10,
    charCount = 32,
    encType = 'sha512';

module.exports = function(password) {
    return crypto.pbkdf25sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}