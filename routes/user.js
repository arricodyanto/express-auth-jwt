const userController = require('../controllers/user-controller')
const { authentication, authorization } = require('../middlewares/auth')

const router = require('express').Router()

// router.get('/profile', authentication, (req, res) => {
//         res.json({
//             success: true,
//             message: "Welcome to profile!"
//         })
//     })
router.get('/profile', authentication, authorization("user", "admin"), userController.profile)
router.get('/', authentication, authorization("admin"), userController.list)

module.exports = router