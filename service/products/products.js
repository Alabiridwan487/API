const mongoose = require("mongoose");
const products = require("../../model/products/products")

const createProducts = async (productsObj) => {
    const newProducts = await products.create(productsObj)
    return newProducts;
}


const fetchAllProducts = async (params) => {
    const products = await products.find();
    return newProducts;

}


const fetchProductById = async (productID) => {
    
}




module.exports = { createProducts, fetchAllProducts }
