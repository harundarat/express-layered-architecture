// Desc: Ensure that all required fields are provided from the client
const validateProductData = (req, res, next) => {
  const { name, price, description, image } = req.body;
  if (!name || !price || !description || !image)
    return res
      .status(400)
      .send({ message: "Please provide all required fields" });

  if (typeof price !== "number")
    return res.status(400).send({ message: "Price field must be a number" });

  next();
};

module.exports = { validateProductData };
