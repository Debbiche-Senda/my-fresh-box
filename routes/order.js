const express = require("express");
const { addOrder } = require("../controllers/order.controller");

const Router = express.Router();

Router.post("/add-product", addOrder);



module.exports = Router;