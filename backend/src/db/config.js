require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URI = process.env.DATABASE_URI;

(async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("✅ Base de datos conectada con éxito");
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error);
  }
})();