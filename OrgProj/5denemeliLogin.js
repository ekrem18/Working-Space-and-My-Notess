"use strict"

const setToken = require('../helpers/setToken')

const User = require ('../models/userModel')

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 10 * 60 * 1000;

module.exports = {
    login: async (req, res) => {
        /* 
        #swagger.tags = [ 'Authantication' ]
        #swagger.summary = 'JWT: Login'
        #swagger.description = 'Login with email and password'
        #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    email: 'test@test.com',
                    password: '1234'
                }
            }
        */ 
            const { email, password } = req.body;

            if (email && password) {
                const user = await User.findOne({ email });
    
                if (user) {
                    if (user.isActive) {
                        if (user.lockUntil > Date.now()) {
                            res.errorStatusCode = 401;
                            throw new Error("Account is locked.");
                        }
    
                        const isPasswordMatch = await user.comparePassword(password);
    
                        if (isPasswordMatch) {
                            // Başarılı giriş
                            user.loginAttempts = 0;
                            user.lockUntil = undefined;
                            await user.save();
    
                            res.send({
                                error: false,
                                token: setToken(user),
                            });
                        } else {
                            // Yanlış şifre girişi
                            user.loginAttempts += 1;
    
                            if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
                                user.lockUntil = Date.now() + LOCK_TIME;
                                await user.save();
                                res.errorStatusCode = 401;
                                throw new Error("Too many failed login attempts. Account is locked ");
                            }
    
                            await user.save();
                            res.errorStatusCode = 401;
                            throw new Error(`Wrong email or password. Remaining attempts: ${MAX_LOGIN_ATTEMPTS - user.loginAttempts}`);
                        }
                    } else {
                        res.errorStatusCode = 401;
                        throw new Error("User's account is not 'Active!'");
                    }
                } else {
                    res.errorStatusCode = 401;
                    throw new Error('Wrong email or password');
                }
            } else {
                res.errorStatusCode = 401;
                throw new Error('Please enter your email and password');
            }
        },

        logout: async (req,res) => {
            /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Logout'
            #swagger.description = 'No don't have to do anything for logout.'
        */
       res.send({
        error:false,
        message:"No don't have to do anything for logout."
       })
        }
    };
    