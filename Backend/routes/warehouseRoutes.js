// backend/routes/warehouseRoutes.js

const express = require('express');
const warehouseController = require('../controllers/warehouseController');
const router = express.Router();

router.get('/', warehouseController.getWarehouses);
router.post('/', warehouseController.createWarehouse);
router.get('/:id', warehouseController.getWarehouseById);
router.put('/:id', warehouseController.updateWarehouse);
router.delete('/:id', warehouseController.deleteWarehouse);
router.put('/:id/toggle-active', warehouseController.toggleActiveStatus);

module.exports = router;
