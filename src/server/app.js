'use strict';

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const helloWorld = require('./HelloWorld.js');
//const users = require('./users');

// Configure the server
const port = process.env.port || 3000;

// Create a new express server
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Send a response to the index
app.get('/', helloWorld.helloWorld);

//app.use('/users', users);
//
//app.use('/login', express.static('src/client'));
//require('./session').session(app);

// Start server on the specified port and binding host
app.listen(port, () => {
  console.log(`Node Version: ${process.version}`);
  console.log(`Server starting on http://localhost:${port}`);
});
