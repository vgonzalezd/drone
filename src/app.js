// backend app is a function that inits a Server

/* Import the libraries that the application needs
*/
const express = require('express');
const app = express();
  //with bodyParser we can use middlewares
const bodyParser = require('body-parser');
const path = require('path');

// Execute le index.js
const config = require('./config');
// Routes
const routes = require('./api/routes');

module.exports = function() {
  // We use bodyParser.urlencoded({ extended: true }) for the POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // I define the template engine (Process info and change it to HTML)
  app.set('view engine', 'ejs');

  // INDICATE the route to the views and the ASSETS (styles and images)
  // Execute index.ejs that has the HTML design
  app.set('views', path.join(__dirname, '/views'));
  // __dirname=src
  //Execute app.js that is aware of the changes (AJAX petitions)
  app.use(express.static(__dirname + '/public'));


  // I import the routes from the routes file that will be use in the AJAX petitions
  app.use('/', routes);

  app.listen(config.server.port);
  console.log('Server is not Running!');
  console.info('Host: ' + config.server.host);
  console.info('Port: ' + config.server.port);
  }
