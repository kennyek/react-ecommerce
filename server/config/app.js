const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { usersRouter } = require('./routes');
require('./database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);

module.exports = app;
