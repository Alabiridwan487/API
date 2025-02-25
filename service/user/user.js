const mongoose = require("mongoose");
const user = require("../../model/signup/signup")

const createUser = async (userDetails) => {
    const userInfo = await user.create(userDetails)
    return userInfo;
}

const fetchAllUsers = async (params) => {
    const users = await user.find();
    return users;
}

const deleteUser = async (userId) => {
    const singleUser = user.findByIdAndDelete(userId)
    return singleUser;
}


module.exports = { createUser, fetchAllUsers , deleteUser }