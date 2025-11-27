const { model, Schema } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String, // Lo dejamos como String porque en tu JSON viene como "40,000"
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    imageAltUrl: {
        type: String,
        required: false // No es obligatoria por si alguna no tiene segunda imagen
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    }
});

// El primer argumento es el nombre del modelo en singular.
// Mongoose buscará la colección en plural: "products" (o "productos" si lo forzamos).
// Como tu colección se llama 'productos', vamos a especificarlo explícitamente:
const Product = model("Product", ProductSchema, "productos");

module.exports = Product;