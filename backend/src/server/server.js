const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones de otros dominios (tu frontend)
app.use(express.json()); // Permite recibir datos en formato JSON

// Ruta de prueba inicial
app.get("/", (req, res) => {
  res.send("¡Hola! El servidor de Panozzo Indumentaria está funcionando 🚀");
});

module.exports = app;