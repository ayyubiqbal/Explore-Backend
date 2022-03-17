require('dotenv').config('../.env');
const express = require('express');
const middleware = require('./middleware');
const { errorHandler, notFoundHandler } = require('./error')

const app = express();

const myDB = require('../db/db')
myDB.create('user 1', 10)
myDB.create('user 2', 10)
myDB.create('user 3', 10)
myDB.create('user 4', 10)
myDB.create('user 5', 10)
myDB.create('user 6', 10)
myDB.bulkCreate('user 6', 10, 5);
const tickets = myDB.find();
console.log('All Tickets', tickets);
const winners = myDB.draw(3);
console.log('winners', winners);

app.use(middleware);
app.use(require('./routes'));
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app;