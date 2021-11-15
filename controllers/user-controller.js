const user = require('../db/models/user')
const db = require('./../db/models')

const profile = async(req, res, next) => {
    const { id } = req.user
    const user = await db.User.findByPk(id)
    user.password = undefined
    res.json({
        success: true,
        message: 'Success retrieving User Profile',
        data: user
    })
}

const list = async(req, res, next) => {
    const users = await db.User.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All User Data",
        data: users,
    })
}

module.exports = {
    profile,
    list
}