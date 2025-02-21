const { createProducts, fetchAllProduct } = require("../../service/products/products");

const createProductsController = async (req, res) => {
   try {
       const newProducts = await createProducts(req.body);
       res.status(201).json({ data: newProducts, message: `products created successfully`, status: true })
   } catch (error) {
       res.status(500).json({ data: error.message, message: `Failed to create product`, status: false })
   }
}

const fetchAllProductsController = async (req, res) => {
    try {
        const newProducts = await fetchAllProducts();
        res.status(201).json({ data: newProducts, message: `products fetched successfully`, status: true })
    } catch (error) {
        res.status(500).json({ data: error.message, message: `Failed to create product`, status: false })
    }
 }


module.exports = { createProductsController, fetchAllProductsController }

