const express = require('express');
const router = express.Router();
const actorsController = require('../Controllers/actor.controller');

router.get('/getAllActors', actorsController.getAllActors);
router.get('/:id', actorsController.getSingleActor);
router.post('/actor', actorsController.createActor);
// router.put('/:guid', actorsController.updateActor);
// router.delete('/:id', actorsController.deleteActor);

module.exports = router;