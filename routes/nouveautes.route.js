const express = require('express');
const router = express.Router();
const nouveautesController = require('../controllers/nouveautes.controller');


router.get('/', nouveautesController.getNouveautes);


module.exports = router;