const express = require('express');
const router = express.Router();
const rechercheController = require('../controllers/recherche.controller');

router.get('/:param' , rechercheController.getArticlesBySearch)
module.exports = router;