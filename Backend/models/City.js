const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' } // Add status field
});

module.exports = mongoose.model('City', citySchema);
