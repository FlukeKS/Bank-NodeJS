const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./src/routes'); // ✅ ต้องชี้มาที่ src/routes/index.js
const { notFound, errorHandler } = require('./src/middlewares/error');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api', routes); 

app.use(notFound);
app.use(errorHandler);

module.exports = app;