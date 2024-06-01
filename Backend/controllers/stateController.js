// backend/controllers/stateController.js

const State = require('../models/State');

// Controller functions
exports.getStates = async (req, res, next) => {
    try {
        const states = await State.find();
        res.json(states);
    } catch (error) {
        next(error);
    }
};

exports.createState = async (req, res, next) => {
    try {
        const { name, code } = req.body;
        const newState = new State({ name, code });
        await newState.save();
        res.status(201).json(newState);
    } catch (error) {
        next(error);
    }
};

exports.updateStateStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const state = await State.findByIdAndUpdate(id, { status }, { new: true });
        if (!state) {
            return res.status(404).json({ message: 'State not found' });
        }
        res.json(state);
    } catch (error) {
        next(error);
    }
};

exports.deleteStateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedState = await State.findByIdAndDelete(id);
        if (!deletedState) {
            return res.status(404).json({ message: 'State not found' });
        }
        res.json({ message: 'State deleted successfully', deletedState });
    } catch (error) {
        next(error);
    }
};