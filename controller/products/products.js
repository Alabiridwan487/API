const { createProducts, fetchAllProducts } = require("../../service/products/products");

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
        console.log(1);
        const newProducts = await fetchAllProducts();
        console.log(2);
        res.status(201).json({ data: newProducts, message: `products fetched successfully`, status: true })
    } catch (error) {
        res.status(500).json({ data: error.message, message: `Failed to create product`, status: false })
    }
 }


module.exports = { createProductsController, fetchAllProductsController }

