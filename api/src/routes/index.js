const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRoutes = require("./countriesRoutes");
const activityRoutes = require("./activityRoutes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countriesRoutes);
router.use("/activity", activityRoutes);

module.exports = router;
