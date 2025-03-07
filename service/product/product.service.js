const mongoose = require("mongoose");
const products = require("../../model/products/product.model")

const createProducts = async (productsObj) => {
    const newProducts = await products.create(productsObj)
    return newProducts;
}


const fetchAllProducts = async () => {
    const allProducts = await products.find();
    return allProducts;

}


const fetchProductById = async (productID) => {

}



module.exports = { createProducts, fetchAllProducts }
