"user strict"
const mongoose = require('mongoose');
// const connection
// const password

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: [
            (email) => email.includes('@') && email.includes('.') ,
            'e-mail must contain  "."  and  "@" '
        ]
    },

    password: {
        type: String, 
        trim: true,
        required: true,
        // set: (password) => passwordEncrypt(password)
    }, 

    role: {
        type: String,
        enum:['customer', 'admin', 'moderator'], 
        default: "customer",
    },

    is_verified: {
        type: Boolean,
        default: false, 
    },

    is_active:{
        type: Boolean,
        default: true, 
    },

    is_deleted:{
        type: Boolean,
        default: false, 
    },

    deleted_at:{
        type: Date,
        default: Date.now
    }, 

    // created_at:{
    //     type: Date,
    //     default: Date.now
    // },

    // updated_at:{
    //     type: Date,
    //     default: Date.now
    // },

},{
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)