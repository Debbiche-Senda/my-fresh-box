const express = require("express");
// const {models} = require('mongoose');
const { userRegister, userLogin, getUsers, getUserById } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");
const {registerRules, validator} = require("../middlewares/validator")
const Router = express.Router();

Router.post('/register', registerRules(), validator, userRegister);
Router.post('/login', userLogin);  
Router.get('/getUser', getUsers );
Router.get('/getUserById/:_id',isAuth(), getUserById);
Router.get('/current-user', isAuth(), (req, res)=>{
    res.json({msg: "User authentified"});
});

module.exports = Router;