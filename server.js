require("dotenv").config({path: "./config/.env"});
const express = require('express');
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const order = require('./routes/order');
const admin = require("./routes/admin");
const posts = require("./routes/posts");
const app = express();

// Parse data
app.use(express.json());

// Data base connection
connectDB();


// Routes
app.use("/api/user", user);
app.use("/api/order", order);
app.use("/api/admin", admin);
app.use("/api/post", posts);


// Define port
const PORT = process.env.PORT;


// Server connection
app.listen(PORT, (err)=>{
    err ? console.log("Server connection failed", err) : console.log(`server connected successfully on PORT ${PORT}`);
});




