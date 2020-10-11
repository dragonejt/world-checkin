const routes = require('express').Router();
const allzips = require('./allzips');
const checkin = require('./checkin');
const checkout = require('./checkout');
const pop = require('./pop');

routes.use('/allzips', allzips);
routes.use('/checkin', checkin);
routes.use('/checkout', checkout);
routes.use('/pop', pop);

routes.get('/', (req, res) => {
    res.send("hello world!");
    res.status(200).end();
})

module.exports = routes;