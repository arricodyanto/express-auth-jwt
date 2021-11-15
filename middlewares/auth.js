const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken")
const ApiError = require("../helpers/api-error")
const { verify } = require("../helpers/auth-jwt")

const authentication = (req, res, next) => {
    try {
        const headerToken = req.headers.authorization
            // console.log(headerToken)
        if (headerToken) {
            const token = headerToken.split(" ")[1]
            const payload = verify(token)
                // console.log(payload)
            req.user = payload
            return next()
        }
        throw ApiError.badRequest('Token Required!')
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            next(ApiError.badRequest('Token Expired!'))
        }
        if (error instanceof JsonWebTokenError) {
            next(ApiError.badRequest('Token Invalid!'))
        }
        // console.log(error)
        next(error)
    }
}

const authorization =
    (...roles) =>
    (req, res, next) => {
        // console.log(req.user.role)
        // console.log(roles)
        if (roles.includes(req.user.role)) {
            next()
        } else {
            next(ApiError.forbidden('Forbidden Request!'))
        }
    }

module.exports = {
    authentication,
    authorization
}