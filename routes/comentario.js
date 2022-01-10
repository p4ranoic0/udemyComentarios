const express = require("express");
const router = express.Router();

const comentarioController = require("../controllers/ComentarioController");

router.post("/", comentarioController.crear);
router.get("/", comentarioController.obtener);
router.delete("/:id", comentarioController.eliminar);

module.exports = router;
