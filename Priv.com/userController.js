"use strict"

const User = require('../model...')

module.exports = {
    create: async(res,req) => {
        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async(res,req) => {
        const data = await User.findOne({_id : req.params.id})

        res.status(201).send({
            error: false,
            data
        })
    },

    update: async(req, res) => {
        const data = await User.updateOne({_id: req.params.id}, req.body, {runValidators: true})

        res.status(201).send({
            error: false,
            data
        })
    },

    delete: async(req,res ) => {
        const data = await User.deleteOne({_id: req.params.id})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}