const express = require('express');
const router = express.Router();

// ✅ ตอบเมื่อเรียก GET /api
router.get('/', (req, res) => {
  res.json({ api: 'ok' });
});

// ✅ รวม route อื่น ๆ
router.use('/auth', require('./authRoutes'));
router.use('/accounts', require('./accountRoutes'));
// ❌ อย่ามา include ตัวเอง
// router.use('/transactions', require('./transactionRoutes'));

module.exports = router;
