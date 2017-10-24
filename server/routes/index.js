const router = require('express').Router();
const db = require('../db');
const models=require('../db/models');
const Students=models.Student;
const Campuses=models.Campus;
const Users=models.User;

router.use('/users', require('./puppies')); // matches all requests to /api/users/
router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/

// handles 404s
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;