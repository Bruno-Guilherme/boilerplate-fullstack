const User = require('../models/User')

const createServie = (body) => User.create(body)

module.exports = {
    createServie
}