require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser');

const router = express.Router();
const routes = require('./routes/index.js')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/g', routes(router))

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Getir Assesment app listening at http://localhost:${port}`))
}

module.exports = app;
