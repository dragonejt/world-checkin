const pop = require('express').Router();
const PopulationModel = require('../../PopulationModel');

pop.get('/', (req, res) => {
    try {

        //database call for population
        let zip = req.query.zip;

        //finds document with matching zipcode
        PopulationModel.find({zipCode: zip}).then((data) => {

        //returns the oject found
        const response = data[0];
        res.send(response);
        res.status(200).end();

        }).catch((error) => {
            console.error("There was an error: ", error);
            res.status(404).end();
        })

    } catch (error) {
        console.error(error);
        res.status(404).end();
    }
})

module.exports = pop;
