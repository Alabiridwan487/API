const { signUp, fetchAllUsers, deleteUser, signIn } = require("../../service/auth/auth.service");


const signUpController = async (req, res) => {
    try {
        const newUser = await signUp(req.body)
        res.status(201).json({ data: newUser, message: `user created`, status: true })
    } catch (error) {
        res.status(500).json({ data: error.message, message: `user created failed`, status: false })
    }
}


const signInController = async (req, res) => {
    try {
        const data = await signIn(req.body)
        return res.status(200).json({ data: data, message: "Logged in successfully", status: true });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ data: [], message: error.message, status: false })
    }
}

const fetchUsers = async (req, res) => {
    try {
        const users = await fetchAllUsers()
        res.status(200).json({ data: users, message: `users fetched`, status: true })
    } catch (error) {
        res.status(500).json({ data: [error], message: `users fetch failed`, status: false })
    }

}

const deleteUserController = async (req, res) => {
    try {
        const singleUser = await deleteUser(req.params.userId)
        res.status(200).json({ data: singleUser, message: `User not found...`, status: true })
    } catch (error) {
        res.status(500).json({ data: error, message: `failed to delete user`, status: false })
    }

}

module.exports = { signUpController, fetchUsers, deleteUserController, signInController }

