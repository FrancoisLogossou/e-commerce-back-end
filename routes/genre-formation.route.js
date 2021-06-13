const express = require('express');
const router = express.Router();
const genreFormationController = require('../controllers/genre-formation.controller');

router.get('/', genreFormationController.getGenreFormation);



module.exports = router;