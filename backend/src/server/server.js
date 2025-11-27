const express = require("express");
const cors = require("cors");
const productsRouter = require("../routers/products.routes"); // <--- Importamos las rutas

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/products", productsRouter); // <--- Usamos las rutas en la dirección '/products'

// Ruta de bienvenida (opcional, para verificar que el server vive)
app.get("/", (req, res) => {
  res.send("¡Hola! El servidor de Panozzo Indumentaria está funcionando 🚀");
});

module.exports = app;