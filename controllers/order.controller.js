const Order = require("../models/Order");




/********************** Add order   ************************ */

exports.addOrder = async (req, res)=>{
    const newOrder = await new Order({...req.body});
    const article = req.body.article;
    const order = await Order.findOne({article});
    try {
        if (order) { return res.status(400).json({ msg: "Product already exist" });}
        newOrder.save();
        res.status(202).json({ msg: "Product added successfully " });
    } catch (error) {
        console.error("Adding product failed", error);
    res.status(402).json({ msg: "Product adding failed" });
    }
};

