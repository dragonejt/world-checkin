const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());


const uri = process.env.URI_STRING;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
  res.send("hello world!");
  res.status(200).end();
})

app.listen(port, () => {
    console.log(`Database server is running on port: ${port}`);
});