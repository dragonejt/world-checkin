const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const PopulationModel = require('./PopulationModel');
const routes = require('./routes')
require('dotenv').config({path:'../.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/', routes);

const uri = process.env.URI_STRING;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true}
);

mongoose.connection.once('connected', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Database server is running on port: ${port}`);
});