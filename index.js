const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

const app = express(); //creamos el servidor

conectarDB(); //Estableciendo conexion con la base de datos

app.use(express.static('public')); //directorios publicos
// app.get("/", (req, res) => {
//   res.send("Hola mundo desde nodejs con express");
// });
app.use(express.json());
app.use(cors());
app.use("/api/comentarios", require("./routes/comentario"));

app.listen(process.env.PORT, () => {
  console.log("El servidor se ha iniciado en el puerto " + process.env.PORT);
});
