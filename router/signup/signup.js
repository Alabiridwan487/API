const express = require ("express")
const { signUp,fetchUsers, deleteUserController } = require ("../../controller/signup/signup")


const router = express.Router()

router.post('/sign-up', signUp)
router.get('/all-users', fetchUsers)
router.delete('/delete-user/:userId', deleteUserController)

module.exports = router