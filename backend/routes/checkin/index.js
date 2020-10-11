const checkin = require('express').Router();
const PopulationModel = require('../../PopulationModel');


checkin.post('/', (req, res) => {
    try {

        let zip = req.query.zip;

        PopulationModel.find({zipCode: zip}).then((data) => {

            let response = data[0];
            //if the query returns a result
            if (response) {
            //increments population by one
            response.population += 1;

            //creates a new document based on the upadted data
            const updateZip = new PopulationModel(response);
            //adds updates the document in the mongo db
            updateZip.save((error) => {
                //if there's an error send 404
                if (error) {
                console.error(error);
                res.status(404).end();
                }
                //else send response and 200 
                else {
                res.send(response);
                res.status(200).end();
                }
            });
        }
        //if the query returns nothing
        else {
        //set response to queried zip and default population of 1
            response = {
                zipCode: zip,
                population: 1
            };
            //create a new document
            const newZip = new PopulationModel(response);

            //add the new document to the database
            newZip.save((error) => {
                //if error send 404
                if (error) {
                console.error(error);
                res.status(404).end();
                }
                //else send response and 200
                else {
                res.send(response);
                res.status(200).end();
                }
            })
        }

    }).catch((error) => {
        console.error(error);
        res.status(404).end();
    })

    }
    catch (error) {
    console.error(error);
    res.status(404).end();
    }
    
})

module.exports = checkin