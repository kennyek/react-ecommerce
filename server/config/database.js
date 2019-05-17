const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

const { DATABASE } = process.env;
const options = { useNewUrlParser: true };
const connection = mongoose.connect(DATABASE, options);

module.exports = connection;