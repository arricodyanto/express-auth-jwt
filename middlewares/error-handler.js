const ApiError = require('../helpers/api-error')

const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({
            success: err.success,
            message: err.message
        })
    }
    return res.status(500).json({
        success: false,
        message: "Something went wrong!"
            // name: err.name,
            // message: err.message
    })
}

module.exports = errorHandler