const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'});


const Schema = mongoose.Schema;

const modelSchema = new Schema({
    zipCode: { type: String, required: true },
    population: { type: Number, required: true },
});

const PopulationModel = mongoose.model('Zipcode', modelSchema);

module.exports = PopulationModel;