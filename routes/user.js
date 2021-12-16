const express = require("express");
// const {models} = require('mongoose');
const { userRegister, userLogin } = require("../controllers/user.controller");


const Router = express.Router();

Router.post('/register', userRegister);
Router.post('/login', userLogin);  


module.exports = Router;