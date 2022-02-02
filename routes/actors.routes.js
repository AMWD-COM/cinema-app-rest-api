const express = require('express');
const router = express.Router();
const actorsController = require('../Controllers/actor.controller');

router.get('/actors', actorsController.getAllActors);
// router.get('/:id', actorsController.getActor);
router.post('/actor', actorsController.createActor);
// router.put('/:id', actorsController.editActor);
// router.delete('/:id', actorsController.deleteActor);

module.exports = router;