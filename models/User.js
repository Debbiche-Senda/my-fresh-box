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
    rating:{
        type: Number,
        min: 1,
        max: 5,
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }],
    password : String ,
    dateOfCreation:{
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("User", userSchema);