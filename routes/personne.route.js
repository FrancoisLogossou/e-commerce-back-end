const express = require('express');
const router = express.Router();
const personneController = require('../controllers/personne.controller');

router.get('/', personneController.getAll);
router.get('/:id', personneController.getOneById);
router.get('/:idPersonne/adresses', personneController.getAdressesByIdPersonne);
router.get('/:idPersonne/adresses/:idAdresse', personneController.getAdresseByIdPersonne);
router.post('/', personneController.add);
router.put('/:id', personneController.edit);
router.delete('/:id', personneController.delete);

module.exports = router;