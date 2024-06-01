const express = require('express');
const stateController = require('../controllers/stateController');
const router = express.Router();

router.get('/', stateController.getStates);
router.post('/', stateController.createState);
router.put('/:id/status', stateController.updateStateStatus);
router.delete('/:id', stateController.deleteStateById); //delete route

module.exports = router;