const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { productsRouter, usersRouter } = require('./routes');
require('./database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

module.exports = app;
