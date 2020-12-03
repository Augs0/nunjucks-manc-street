const express = require("express");

const app = express();
let nunjucks = require('nunjucks');
const path = require('path');
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');

const port = 5000;

app.set('view engine', 'html');

nunjucks.configure('views/', {
    autoscape: false,
    express: app
})

app.use('/', homeRoute);
app.use('/about', aboutRoute);


app.listen(port, () => {
    console.log('App is listening...')
})

module.exports = app;