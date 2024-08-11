const express = require("express");
const router = express.Router();
const productController = require("./product.controller");
const { validateProductData } = require("../../middleware/productValidator");

// Get all products
router.get("/", productController.getAllProducts);

// Get product by id
router.get("/:id", productController.getProductById);

// Create a new product
router.post("/", validateProductData, productController.createProduct);

// Delete product by id
router.delete("/:id", productController.deleteProductById);

// Replace product by id
router.put("/:id", validateProductData, productController.editProductById);

// Update product by id
router.patch("/:id", productController.editProductById);

module.exports = router;
