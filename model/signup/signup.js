const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
})

module.exports = mongoose.model("user", userSchema)
