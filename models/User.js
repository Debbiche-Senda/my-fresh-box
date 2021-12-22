const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : String ,
    lastName : String ,
    email : { 
        type : String,
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user",
    },
    password : String ,
});

module.exports = User = mongoose.model("User", userSchema);