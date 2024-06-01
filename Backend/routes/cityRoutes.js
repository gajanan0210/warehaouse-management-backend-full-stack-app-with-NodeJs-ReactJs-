// backend/routes/cityRoutes.js

const express = require('express');
const cityController = require('../controllers/cityController');
const router = express.Router();

router.get('/', cityController.getCities);
router.post('/', cityController.createCity);
router.get('/:id', cityController.getCityById);
router.put('/:id', cityController.updateCity);
router.delete('/:id', cityController.deleteCity);

module.exports = router;
