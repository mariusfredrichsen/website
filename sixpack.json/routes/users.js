const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json( {message: err.message} )
    }
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json( {message: err.message} )
    }
})

router.patch('/:id', (req, res) => {

})

module.exports = router

