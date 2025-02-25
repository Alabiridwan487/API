const { findByIdAndDelete } = require("../../model/signup/signup");
const { createUser, fetchAllUsers, deleteUser } = require("../../service/user/user");


const signUp = async (req, res) => {
    try {
        const newUser = await createUser(req.body)
        res.status(201).json({data: newUser, message: `user created`, status:true})
    } catch (error) {
        res.status(500).json({data:error.message, message: `user created failed`, status:false})
    }
}

const fetchUsers = async (req,res) => {
    try {
        const users = await fetchAllUsers()
        res.status(200).json({data: users, message: `users fetched`, status:true})
    } catch (error) {
        res.status(500).json({data: error, message: `users fetch failed`, status:false})
    }

}

const deleteUserController = async (req,res) => {
    try {
        const singleUser = await deleteUser(req.params.userId)
        res.status(200).json({data: singleUser, message: `User not found...`, status:true}) 
    } catch (error) {
        res.status(500).json({data: error, message: `failed to delete user`, status:false})
    }

}

module.exports = { signUp, fetchUsers, deleteUserController}
