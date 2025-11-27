const {
  getAllProductsService,
  getProductByIdService,
  addProductService,
  updateProductService,
  deleteProductService,
} = require("../services/products.services");

const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();
  // Si el servicio devuelve un array, lo mandamos directo, si no, mandamos el mensaje
  if (products.statusCode) {
      res.status(products.statusCode).json(products);
  } else {
      res.json(products);
  }
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getProductByIdService(id);
  
  if (result.statusCode) {
      res.status(result.statusCode).json(result);
  } else {
      res.json(result);
  }
};

const addProductController = async (req, res) => {
  const product = req.body;
  const result = await addProductService(product);
  res.status(result.statusCode).json(result);
};

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const productToUpdate = req.body;
  const result = await updateProductService(id, productToUpdate);
  res.status(result.statusCode).json(result);
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteProductService(id);
  res.status(result.statusCode).json(result);
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  addProductController,
  updateProductController,
  deleteProductController,
};