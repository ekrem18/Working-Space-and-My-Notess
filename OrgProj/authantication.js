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