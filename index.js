// const express = require ('express');
// const connectDB = require("./config/db")
// const productRoute = require("./router/products/products")
// const userRoute = require("./router/signup/signup")
// const deleteRoute = require("./router/signup/signup")
// const cors = require("cors")
// const app = express();
// require("dotenv").config();

// connectDB();

// app.use(express.json());
// app.use(cors());


// app.use('/api', productRoute)

// app.use('/api', userRoute)

// app.use('/api', deleteRoute)

// app.listen(process.env.PORT, () => {
//     console.log(`server running on port ${process.env.PORT}`);
// });


const express = require('express');
const connectDB = require("./config/db");
const productRoute = require("./router/products/products");
const userRoute = require("./router/auth/auth.route");
const deleteRoute = require("./router/auth/auth.route");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Connect to database
connectDB();
const PORT = 5002
// Use express.json() to parse JSON requests
app.use(express.json());

// CORS configuration to allow requests from your frontend (localhost:5173 for React)
const corsOptions = {
  origin: 'http://localhost:5173', // Your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  credentials: true, // Allow credentials like cookies or authorization headers
};

app.use(cors(corsOptions));  // Apply the CORS middleware with the specific configuration

// Routes
app.use('/api', productRoute);
app.use('/api', userRoute);
app.use('/api', deleteRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});

