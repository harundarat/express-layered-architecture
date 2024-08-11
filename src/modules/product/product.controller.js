const productServices = require("./product.service");

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getAllProducts();
    res.send(products);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await productServices.getProductById(productId);
    res.send(product);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, image, price } = req.body;

    const product = await productServices.createProduct({
      name,
      description,
      image,
      price,
    });
    res
      .status(201)
      .send({ message: "Product created successfully", data: product });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id: productId } = req.params;
    await productServices.deleteProductById(productId);
    res.send("Product deleted successfully");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const editProductById = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const productData = req.body;

    const product = await productServices.editProductById(
      productId,
      productData
    );

    res.send({ data: product, message: "Product edited" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
};
