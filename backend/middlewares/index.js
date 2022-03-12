const path = require('path');

require('./utils/set-env');

// const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// require('../libs/redis');
// require('../libs/mongodb');
const morgan = require('../libs/morgan');

const log = require('../libs/logger')(module);

const app = express();

// app.use(helmet());

// bodyParser
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({
  extended: false,
}));

// app.use(express.static(`${frontFolder}/public`));

app.use(morgan);
app.use(cookieParser());

// Routing
app.use('/', require('../routes'));

// Error handing
app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  log.warn(err);

  if (req.method === 'GET') {
    res.sendStatus(500);
  } else {
    res.sendStatus(500);
  }
});

process.on('uncaughtException', (err) => {
  if (err.code === 'ECONNREFUSED') {
    return true;
  }

  log.error(err);
  process.exit(1);
});

module.exports = app;
