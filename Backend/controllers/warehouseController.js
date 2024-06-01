// backend/controllers/warehouseController.js
const Warehouse = require('../models/Warehouse');

exports.createWarehouse = async (req, res) => {
  try {
    const warehouse = new Warehouse(req.body);
    await warehouse.save();
    res.status(201).send(warehouse);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find();
    res.send(warehouses);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.id);
    if (!warehouse) {
      return res.status(404).send();
    }
    res.send(warehouse);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!warehouse) {
      return res.status(404).send();
    }
    res.send(warehouse);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByIdAndDelete(req.params.id);
    if (!warehouse) {
      return res.status(404).send();
    }
    res.send(warehouse);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.toggleActiveStatus = async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.id);
    if (!warehouse) {
      return res.status(404).send();
    }
    warehouse.active = !warehouse.active;
    await warehouse.save();
    res.send(warehouse);
  } catch (error) {
    res.status(400).send(error);
  }
};
