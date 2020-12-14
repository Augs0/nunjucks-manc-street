const express = require("express");

const app = express();
app.use(express.static('public'));
let nunjucks = require('nunjucks');

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/artists');
const locationsRoute = require('./routes/locations');

const port = 5000;

app.set('view engine', 'html');

nunjucks.configure('views/', {
    autoscape: false,
    express: app
})

app.use('/', homeRoute);
app.use('/artists', aboutRoute);
app.use('/locations', locationsRoute);


app.listen(port, () => {
    console.log('App is listening...')
})

module.exports = app;