const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const routes = require('./routes')
require('dotenv').config({path:'../.env'});

const app = express();
const port = process.env.PORT || 5000;

//specifies app usage
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/', routes);

//creates a connection to the mongodb database
const uri = process.env.URI_STRING;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true}
);

//event listener for database connection
mongoose.connection.once('connected', () => {
  console.log("MongoDB database connection established successfully");
})

//tells the server to listen on specified port
app.listen(port, () => {
    console.log(`Database server is running on port: ${port}`);
});