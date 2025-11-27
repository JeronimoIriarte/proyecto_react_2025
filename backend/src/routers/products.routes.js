const express = require("express");
const { 
    getAllProductsController, 
    getProductByIdController, 
    addProductController, 
    updateProductController, 
    deleteProductController 
} = require("../controllers/products.controllers");

const productsRouter = express.Router();

// rutas
productsRouter.get("/", getAllProductsController);          // GET /products
productsRouter.get("/:id", getProductByIdController);       // GET /products/:id
productsRouter.post("/", addProductController);             // POST /products (Crear)
productsRouter.put("/:id", updateProductController);        // PUT /products/:id (Editar)
productsRouter.delete("/:id", deleteProductController);     // DELETE /products/:id (Borrar)

module.exports = productsRouter;