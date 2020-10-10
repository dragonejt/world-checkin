const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modelSchema = new Schema({
    zipCode: { type: String, required: true },
    population: { type: int, required: true },
});

const PopulationModel = mongoose.model(zipcode-countofpeople, modelSchema);

module.exports = PopulationModel;