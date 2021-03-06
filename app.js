const express = require('express');
const bodyParser = require('body-parser');

const messageRoutes = require('./api/routes/messages');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/messages', messageRoutes);

module.exports = app;