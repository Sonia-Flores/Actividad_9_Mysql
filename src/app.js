const express = require('express');

const app = express();

app.use(express.json());

app.use('/api', require('./routes/api'))

module.exports = app;
