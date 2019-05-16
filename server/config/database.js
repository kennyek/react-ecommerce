const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const { DATABASE } = process.env;
const connection = mongoose.connect(DATABASE);

module.exports = connection;