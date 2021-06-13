const express = require('express');
const router = express.Router();
const commandeListController = require('../controllers/commande-list.controller');


router.post('/', commandeListController.insertListCommande);

module.exports = router;