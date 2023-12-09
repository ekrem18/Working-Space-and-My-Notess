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


// auth
"use strict"

const jwt = require('jsonwebtoken')
const setToken = require('./setToken')

const user = require ('../issue1/userModel')

module.exports = {
    login: async (req, res) => {
        const {email, password} = req.body

        if(email && password){
            const user = await user.findOne({email, password})

            if(user){
                if(user.isActive){
                    res.send({
                        error: false,
                        token:setToken(user)
                    })

                }else{
                    res.errorStatusCode = 401
                    throw new Error("User's account is not 'Active'! " )
                }

            }else{
                res.errorStatusCode = 401
                throw new Error (' Wrong email or password')
            }
            
        }else{
            res.errorStatusCode = 401
            throw new Error ('Please enter your email and password')
        }
    }}
       