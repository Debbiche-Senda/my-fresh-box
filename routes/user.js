const express = require("express");
// const {models} = require('mongoose');
const { userRegister, userLogin, getUsers } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

Router.post('/register', userRegister);
Router.post('/login', userLogin);  
Router.get('/getUser', getUsers );
Router.get('/current-user', isAuth(), (req, res)=>{
    res.json({msg: "User authentified"});
});

module.exports = Router;