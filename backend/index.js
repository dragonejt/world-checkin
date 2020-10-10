require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const port = process.env.PORT || 4000;
const app = express();
app.use(helmet());


app.get('/', (req, res) => {
    res.send('hellow world!');
    res.status(200).end();
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})