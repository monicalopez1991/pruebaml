var express = require('express');
const bodyParser = require ("body-parser");
const db = require('./config/db');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var params = require ('./app/models/params')
var trainingRouter = require('./app/routes/training');
var teamRouter = require('./app/routes/team');
var paramsRouter = require('./app/routes/params');


var app = express();
app.use(
    bodyParser.json({
    limit: "20mb"})
    );
app.use(
        bodyParser.urlencoded({
        limit: "20mb",
        extended: true})
        );
        
app.use(trainingRouter);
app.use(teamRouter);
app.use(paramsRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;
db.connectToDatabase()

params.findOne({
    id: 1
}).then((docs) => {
    if(docs.length === 0){
        params.create({numberOfPlayers: 5, powerPercentage: 20, speedPercentage:30, passesPercentage:50, id:1})
    }

} )

