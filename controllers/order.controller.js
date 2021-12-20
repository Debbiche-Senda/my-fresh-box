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

/********************* Get product******************* */

exports.getProduct = (req, res) =>{
    const { _id } = req.params;
    // const order = await Order.findById({ _id });
    Order.find({_id}).then((order)=>res.status(200).json(order[0])).catch((err) => res.json(err));
}
/********************* Get all products ******************* */

exports.getProducts = async (req, res) =>{
    
    const orders = await Order.find();
    try {
      res.status(200).json({ orders });
    } catch (error) {
      console.log("get products failed", error);
      res.status(403).json({ msg: "get products failed" });
    }
}

/******************** Update products ************************* */
exports.editProduct = async (req, res) =>{
    let { _id } = req.params;
    try {
        await Order.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
        res.status(203).json({ msg: "Product updated successfully" });
    } catch (error) {
        console.log("Product update failed", error);
    res.status(403).json({ msg: "Product update failed" });
    }

}

/********************** Delete product *************************** */

exports.deleteProduct = async (req, res) =>{
    const { _id } = req.params;
    try {
       await Order.findByIdAndDelete({ _id }) ;
       res.status(200).json({ msg: "Product deleted with success" });
    } catch (error) {
        console.error("Product delete failed", error);
    res.status(402).json({ msg: "Product delete failed" });
        
    }
}
