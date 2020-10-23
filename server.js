require('dotenv').config();

const express = require('express');
const connectToDb = require('./lib/connect-to-db');

const app = express();

connectToDb( {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
  res.send("And now you are in Home Page");
});
// Load the routes
const routes = require('./lib/routes');
routes(app);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
