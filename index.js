const express = require('express');
//required database connection
const db = require('./config/connection');
//imported routes
const routes = require('./routes');

//server will run on port
const PORT = process.env.PORT || 3001;
const app = express();

//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on ${PORT}!`);
  });
});