const express = require("express");
const { createProductsController, fetchAllProductsController } = require("../../controller/products/products");

const router = express.Router();


router.post('/product', createProductsController)
router.get("/products", fetchAllProductsController)


module.exports = router;