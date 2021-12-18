require("dotenv").config({path: "./config/.env"});
const express = require('express');
const connectDB = require("./config/connectDB");
const user = require("./routes/user")
const app = express();

// Parse data
app.use(express.json());

// Data base connection
connectDB();


// Routes
app.use("/api", user);

// Define port
const PORT = process.env.PORT;


// Server connection
app.listen(PORT, (err)=>{
    err ? console.log("Server connection failed", err) : console.log(`server connected successfully on PORT ${PORT}`);
});




