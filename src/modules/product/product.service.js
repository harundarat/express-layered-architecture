// Handle all the business logic for the product module
// For isolation of concerns, and reusability.
const productRepository = require("./product.repository");

const getAllProducts = async () => {
  return await productRepository.findAll();
};

const getProductById = async (productId) => {
  const product = await productRepository.findById(productId);

  if (product.length === 0) throw Error("Product not found");

  return product;
};

const createProduct = async (newProductData) => {
  return await productRepository.create(newProductData);
};

const deleteProductById = async (productId) => {
  await getProductById(productId);

  await productRepository.deleteProduct(productId);
};

const editProductById = async (productId, productData) => {
  await getProductById(productId);
  return await productRepository.update(productId, productData);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
};
