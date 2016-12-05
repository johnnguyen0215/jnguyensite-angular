/**
 * Created by John on 12/4/2016.
 */

// Include express app and initialize it
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Local port #
var port = process.env.PORT || 9000;

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Use methodOverride
app.use(methodOverride('X-HTTP-Method-Override'));

// Set static directory
app.use(express.static(__dirname + '/public'));

// Define location of routes
require('./app/routes')(app);

// Listen on port
app.listen(port);

// Shoutout to users
console.log('Magic happens on port ' + port);

exports = module.exports = app;
