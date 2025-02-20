const express = require ('express');
const app = express();
require("dotenv").config();

const connectDB = require("./config/db")

connectDB()

app.listen(5000, () => {
    console.log(`server running on port ${process.env.PORT}`);
});

