const mongoose = require("mongoose");
const user = require("../../model/auth/user.model")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const signUp = async (userDetails) => {
    const userInfo = await user.create(userDetails);
    return userInfo;
}

const signIn = async (userObj) => {
    const { email } = userObj;
    const { password } = userObj;

    if (!(email) || !(password)) {
        throw Error("Password / Email needs to be provided")
    }

    const userData = await user.findOne({ email });

    if (!(await userData.comparePassword(password) || !(email))) {
        throw Error("Invalid credentials supplied");
    }

    if (!(await userData.comparePassword(password))) {
        throw Error("Invalid password supplied");
    }
    else {
        const token = await generateToken(userObj)
        const userResponse = {
            message: `User logged in successfully`,
            data: userData,
            status: true,
            token: token,
        };
        return userResponse;
    }
}

const generateToken = (user) => {
    return jwt.sign({ email: user.email, firstName: user.lastName }, process.env.SECRET_KEY, { expiresIn: "1hr" })
}

const fetchAllUsers = async (params) => {
    const users = await user.find(params);
    return users;
}

const deleteUser = async (userId) => {
    const singleUser = user.findByIdAndDelete(userId)
    return singleUser;
}


module.exports = { signUp, fetchAllUsers, deleteUser, signIn, generateToken }
