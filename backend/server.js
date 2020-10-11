const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const PopulationModel = require('./PopulationModel');
const e = require('express');
require('dotenv').config({path:'../.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());


const uri = process.env.URI_STRING;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true}
);

mongoose.connection.once('connected', () => {
  console.log("MongoDB database connection established successfully");
})



app.get('/', (req, res) => {
  res.send("hello world!");
  res.status(200).end();
})

app.get('/pop', (req, res) => {
  
  

  try {
    
  //database call for population
    let zip = req.query.zip;
    PopulationModel.find({zipCode: zip}).then((data) => {

      const response = data[0];
      console.log(response);
      res.send(response);
      res.status(200).end();

    }).catch((error) => {
      console.error("There was an error");
      res.status(404).end();
    })

  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
  
})

app.post('/checkin', (req, res) => {
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
            console.log("Successfully checked in");
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
            console.log("Successfully checked in");
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
    console.log(error);
    res.status(404).end();
  }
  
})

app.post('/checkout', (req, res) => {

  try {
    let zip = req.query.zip;
    let population = 100;
    const response = {
      "zip": zip,
      "pop": population
    }
    res.send(response);
    res.status(200).end();
    
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }

  
})

app.listen(port, () => {
    console.log(`Database server is running on port: ${port}`);
});