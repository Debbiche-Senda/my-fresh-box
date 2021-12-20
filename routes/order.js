const express = require("express");
const { addOrder, getProduct, getProducts, editProduct } = require("../controllers/order.controller");

const Router = express.Router();

Router.post("/add-product", addOrder);
Router.get("/:_id", getProduct);
Router.get("/getProducts", getProducts);
Router.put("/:_id", editProduct );




module.exports = Router;