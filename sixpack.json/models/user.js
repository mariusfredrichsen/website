const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    exercises: {
        type: Array,
        required: true,
        default: []
    },
    workouts: {
        type: Array,
        required: true,
        default: []
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)