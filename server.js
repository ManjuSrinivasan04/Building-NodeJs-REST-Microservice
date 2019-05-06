require('dotenv').config();

const Koa = require('koa');
const routes = require('./lib/routes');
const connectToDb = require('./lib/connect-to-db');

const app = new Koa();

connectToDb( {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

const PORT = process.env.PORT || 8080;

// Load the routes
app.use(routes());

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
