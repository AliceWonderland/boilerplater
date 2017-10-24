// SERVER ENTRY FILE

if (process.env.NODE_ENV === 'development') require('../secrets')

// express routing server
const express = require('express');
const app = express();

// logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// static middleware for files in /public
const path = require('path');
app.use(express.static(path.join(__dirname, '..', '/public')));
app.use('/bootstrap', express.static(path.join(__dirname, '..', '/node_modules/bootstrap/dist')));

// parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.use('/api', require('./routes')); // matches all requests to /api

  /*
    Any routes or other various middlewares should go here!
  */

  /*
    Make sure this is right at the end of your server logic!
    The only thing after this might be a piece of middleware to serve up 500 errors for server problems
    (However, if you have middleware to serve up 404s, that go would before this as well)
  */

// end routing

// handle 404s
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// handle 500s
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// database
const db = require('./db');

//start/sync db, then start server
db.sync()
.then(() => {
    // start server
    const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
    app.listen(port, function () {
        console.log("Knock, knock");
        console.log("Who's there?");
        console.log(`Your server, listening on port ${port}`);
        console.log(`Browse to http://localhost:${port} to view your app`);
    });
});

