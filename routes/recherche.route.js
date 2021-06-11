const express = require('express');
const router = express.Router();
const rechercheController = require('../controllers/recherche.controller');

router.get('/:param1' , rechercheController.getArticlesBySearch)
module.exports = router;