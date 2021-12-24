const express = require("express");
const { addPost, editPost, getPost, deletePost} = require("../controllers/post.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

Router.post("/add-post",isAuth(), addPost);
Router.get("/getPost", getPost );
Router.put("/:_id", editPost);
Router.delete("/:_id", deletePost);

module.exports = Router;