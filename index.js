const express = require ('express');
const connectDB = require("./config/db")
const productRoute = require("./router/products/products")
const userRoute = require("./router/signup/signup")
const deleteRoute = require("./router/signup/signup")
const app = express();
require("dotenv").config();

connectDB();

app.use(express.json());

app.use('/api', productRoute)

app.use('/api', userRoute)

app.use('/api', deleteRoute)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});

