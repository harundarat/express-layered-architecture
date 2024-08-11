const express = require("express");
const router = express.Router();
const productRoutes = require("../modules/product/product.routes");

router.use("/products", productRoutes);

module.exports = router;
