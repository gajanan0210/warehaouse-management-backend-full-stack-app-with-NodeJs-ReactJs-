// backend/models/Warehouse.js
const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model('Warehouse', warehouseSchema);
