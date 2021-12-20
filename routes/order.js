const express = require("express");
const { addOrder, getProduct, getProducts, editProduct, deleteProduct } = require("../controllers/order.controller");

const Router = express.Router();

Router.post("/add-product", addOrder);
Router.get("/:_id", getProduct);
Router.get("/getProducts", getProducts);
Router.put("/:_id", editProduct );
Router.delete("/:_id", deleteProduct);





module.exports = Router;