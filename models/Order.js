const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    article : String,
    photo : String,
    quantité : String,
    ingrédients : String,
    catégorie : String,
    famille : String,
    description : String,
    ustenciles : String,
    valeur_nutritionnelle : String,
    prix : String,
});

module.exports = Order = mongoose.model("Order", orderSchema)