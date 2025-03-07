const express = require ("express")
const { signInController,signUpController, fetchUsers, deleteUserController } = require ("../../controller/auth/auth.controller")


const router = express.Router()

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)
router.get('/all-users', fetchUsers)
router.delete('/delete-user/:userId', deleteUserController)

module.exports = router