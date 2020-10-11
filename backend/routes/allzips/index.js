const allzips = require('express').Router();
const PopulationModel = require('../../PopulationModel');


/**
 * @returns sends back an array of every document in the database containing a: zipCode: 'string' pair and a population: int pair
 */
allzips.get('/', (req, res) => {
    try {
        //finds any document in the database
        PopulationModel.find({ }).then((data) => {
            //sends the data back as a json
            res.json(data);
            //sends 200 success code
            res.status(200).end();
        }).catch((error) => {
            console.error("There was an error: " + error);
            //sends 404 not found code
            res.status(404).end();
        })

    } catch (error) {
        console.error("There was an error: " + error);
        //sends 500 internal server error code
        res.status(500).end()
    }
})

module.exports = allzips