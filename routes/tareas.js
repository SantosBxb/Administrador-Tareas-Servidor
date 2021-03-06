const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// crear tarea
// api/tareas
router.post(
  "/",
  auth,
  [
    check("nombre", "El nombre de la tarea es obligatorio").not().isEmpty(),
    check("proyecto", "El nombre del proyecto es obligatorio").not().isEmpty(),
  ],
  tareaController.crearTarea
);

// obtener tareas por proyecto 
router.get("/",
  auth,
  tareaController.obtenerTareas
)

// Actualizar tarea
router.put("/:id",
  auth,
  tareaController.actualizarTarea
)

// Eliminar tarea
router.delete("/:id",
  auth,
  tareaController.eliminarTarea
)

module.exports = router;
