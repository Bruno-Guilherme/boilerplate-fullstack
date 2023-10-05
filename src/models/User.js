const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        unique: true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User