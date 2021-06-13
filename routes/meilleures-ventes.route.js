const express = require('express');
const router = express.Router();
const meilleuresVentesController = require('../controllers/meilleures-ventes.controller');

router.get('/', meilleuresVentesController.getMeilleuresVentes);



module.exports = router;