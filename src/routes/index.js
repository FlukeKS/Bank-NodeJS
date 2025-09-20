const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ api: 'ok' });
});

router.use('/auth', require('./authRoutes'));
router.use('/accounts', require('./accountRoutes'));
router.use('/transactions', require('./transactionRoutes'));

module.exports = router;