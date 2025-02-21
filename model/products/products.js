const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductName: { type: String, required: true },
    productAmount: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    productCategory: { type: String, required: true },
})

module.exports = mongoose.model("products", productSchema)