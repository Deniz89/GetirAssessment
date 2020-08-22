require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser');

const router = express.Router();
const routes = require('./routes/index.js')

// Express Configurations
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router configuration
app.use('/g', routes(router))

// For running tests, do not execute listen.
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Getir Assignment app listening at http://localhost:${port}`))
}

module.exports = app;
