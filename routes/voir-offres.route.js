const express = require('express');
const router = express.Router();
const voirOffresController = require('../controllers/voir-offres.controller');

router.get('/:option', voirOffresController.getAllByOptions);


module.exports = router;