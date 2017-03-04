'use strict';

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const helloWorld = require('./HelloWorld.js');
const beacons = require('./beacons')

// Configure the server
const port = process.env.PORT || 3000;

// Create a new express server
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
})

// Send a response to the index
app.get('/', helloWorld.helloWorld);

app.use('/beacons', beacons);
// Start server on the specified port and binding host
app.listen(port, () => {
  console.log(`Node Version: ${process.version}`);
  console.log(`Server starting on http://localhost:${port}`);
});
