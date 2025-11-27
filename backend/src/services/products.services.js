const Product = require("../models/product.model");

const getAllProductsService = async () => {
  // Busca todos los productos en la colección
  const allProducts = await Product.find();

  if (!allProducts) {
    return { message: "No se encontraron productos", statusCode: 404 };
  }

  return allProducts;
};

const getProductByIdService = async (id) => {
  // Buscamos por el campo 'id' (el string numérico), no por el '_id' de Mongo
  const product = await Product.findOne({ id: id });

  if (!product) {
    return { message: "Producto no encontrado", statusCode: 404 };
  }

  return product;
};

const addProductService = async (productData) => {
  try {
    // Verificamos si ya existe un producto con ese ID para evitar duplicados
    const existingProduct = await Product.findOne({ id: productData.id });
    if (existingProduct) {
        return { message: "Ya existe un producto con ese ID", statusCode: 400 };
    }

    const newProduct = new Product(productData);
    await newProduct.save();
    return { message: "Producto creado con éxito", statusCode: 201 }; 
  } catch (error) {
    return { message: error.message, statusCode: 500 };
  }
};

const updateProductService = async (id, productToUpdate) => {
  try {
    // findOneAndUpdate busca por el campo 'id' y actualiza
    // { new: true } devuelve el producto ya actualizado
    const productUpdated = await Product.findOneAndUpdate({ id: id }, productToUpdate, { new: true });

    if (!productUpdated) {
      return { message: "Producto no encontrado para actualizar", statusCode: 404 };
    }

    return { message: "Producto actualizado con éxito", statusCode: 200, data: productUpdated };
  } catch (error) {
    return { message: error.message, statusCode: 500 };
  }
};

const deleteProductService = async (id) => {
  try {
    const productDeleted = await Product.findOneAndDelete({ id: id });

    if (!productDeleted) {
        return { message: "Producto no encontrado para eliminar", statusCode: 404 };
    }

    return { message: "Producto eliminado con éxito", statusCode: 200 };
  } catch (error) {
    return { message: error.message, statusCode: 500 };
  }
};

module.exports = {
  getAllProductsService,
  getProductByIdService,
  addProductService,
  updateProductService,
  deleteProductService,
};