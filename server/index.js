require('dotenv-safe').config();

const http = require('http');
const app = require('./config/app');

const server = http.createServer(app);
const { PORT } = process.env;

server.listen(PORT, listeningListener);

function listeningListener () {
  console.log(`Server running at port ${PORT}`);
}
