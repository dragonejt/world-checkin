const checkout = require('express').Router();
const PopulationModel = require('../../PopulationModel');

checkout.post('/', (req, res) => {

    try {
        let zip = req.query.zip;

        PopulationModel.find({zipCode: zip}).then((data) => {
            let response = data[0];

            if (response && response.population > 0) {
                response.population -= 1;
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
            else {
            console.log("You have encountered a very bizarre error! Congrats! You should probably get a prize but we have no money, buy a lottery ticket instead.");
            res.status(404).end();
            }
        })
    } 
    catch (error) {
        console.error(error);
        res.status(404).end();
    }
})

module.exports = checkout;