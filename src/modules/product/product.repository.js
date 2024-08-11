// Communicate with the database
const prisma = require("../../config/database");

const findAll = async () => {
  return await prisma.$queryRaw`
        SELECT *
        FROM "Product"`;
};

const findById = async (productId) => {
  const product = await prisma.$queryRaw`
        select *
        from "Product"
        where id = ${productId}
        `;

  return product;
};

const create = async (newProductData) => {
  const { name, description, image, price } = newProductData;

  return await prisma.product.create({
    data: { name, description, image, price },
  });
};

const deleteProduct = async (productId) => {
  await prisma.product.delete({
    where: {
      id: productId,
    },
  });
};

const update = async (productId, productData) => {
  const { name, description, image, price } = productData;

  return await prisma.product.update({
    where: { id: productId },
    data: {
      name: name,
      description: description,
      image: image,
      price: price,
    },
  });
};

module.exports = { findAll, findById, create, deleteProduct, update };
