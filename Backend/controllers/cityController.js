

const City = require('../models/City');

// Controller functions
exports.getCities = async (req, res, next) => {
    try {
        const cities = await City.find().populate('state', 'name code');
        res.json(cities);
    } catch (error) {
        next(error);
    }
};

exports.createCity = async (req, res, next) => {
    try {
        const { name, code, state, status } = req.body;
        const newCity = new City({ name, code, state, status });
        await newCity.save();
        res.status(201).json(newCity);
    } catch (error) {
        next(error);
    }
};

exports.getCityById = async (req, res, next) => {
    try {
        const city = await City.findById(req.params.id).populate('state', 'name code');
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.json(city);
    } catch (error) {
        next(error);
    }
};

exports.updateCity = async (req, res, next) => {
    try {
        const { name, code, state, status } = req.body;
        const updatedCity = await City.findByIdAndUpdate(req.params.id, { name, code, state, status }, { new: true });
        if (!updatedCity) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.json(updatedCity);
    } catch (error) {
        next(error);
    }
};

exports.deleteCity = async (req, res, next) => {
    try {
        const deletedCity = await City.findByIdAndDelete(req.params.id);
        if (!deletedCity) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.json({ message: 'City deleted successfully', deletedCity });
    } catch (error) {
        next(error);
    }
};
