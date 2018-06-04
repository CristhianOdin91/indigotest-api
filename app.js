require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const index = require('./routes/index');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION);

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/v1', index);

// catch 404
app.use((req, res, next) => {
  var err = new Error('Ruta no encontrada');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => res.status(err.status || 500).json({ message: err.message }));

module.exports = app;
