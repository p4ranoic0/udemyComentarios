const mongoose = require("mongoose");
require("dotenv").config({ path: "var.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("base de datos conectada");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
