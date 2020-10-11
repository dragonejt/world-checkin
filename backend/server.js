const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
require('dotenv').config({path:'../.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());


const uri = process.env.URI_STRING;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
  res.send("hello world!");
  res.status(200).end();
})

app.get('/pop', (req, res) => {

  try {
    let zip = req.query.zip;
  //database call for population
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

app.post('/checkin', (req, res) => {
  try {

    let zip = req.query.zip;
    let population = 101;
    const response = {
      "zip": zip,
      "pop": population
    }
    res.send(response)
    res.status(200).end();

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
    res.send(response)
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }

  
})

app.listen(port, () => {
    console.log(`Database server is running on port: ${port}`);
});