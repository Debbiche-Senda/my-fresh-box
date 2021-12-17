const express = require("express");
// const {models} = require('mongoose');
const { userRegister, userLogin, getUsers } = require("../controllers/user.controller");


const Router = express.Router();

Router.post('/register', userRegister);
Router.post('/login', userLogin);  
Router.get('/getUser', getUsers );

module.exports = Router;