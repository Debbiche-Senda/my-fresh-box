require("dotenv").config({path: "./config/.env"});
const express = require('express');

const app = express();


app.use(express.json());

app.listen(process.env.PORT, (err)=>{
    err ? console.log("Server connection failed", err) : console.log("Server connected successfully");
});




