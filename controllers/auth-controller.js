const bcrypt = require('bcrypt')
const ApiError = require('../helpers/api-error')
const saltRounds = 10
const db = require('./../db/models')

const register = async(req, res, next) => {
    try {
        const user = req.body
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(user.password, salt)
            // const checkPassword = bcrypt.compareSync(users.password, hash)
        user.password = hash
        const insertData = await db.User.create(user)
        insertData.password = undefined
        res.status(201).json({
            // message: "Welcome to Register ! (controller)"
            success: true,
            message: "Success Registering a New User !",
            data: insertData

        })
    } catch (error) {
        if (error.message === 'Validation error') {
            next(ApiError.badRequest("Email or Username has been already used!"))
        } else {
            next(error)
        }
    }
}

module.exports = {
    register
}