const express = require('express');
const router = express.Router();

// ✅ ตอบเมื่อเรียก GET /api
router.get('/', (req, res) => {
  res.json({ api: 'ok' });
});

// (ถ้ามีไฟล์ย่อยแล้วค่อยเปิดใช้)
router.use('/auth', require('./authRoutes'));
router.use('/accounts', require('./accountRoutes'));
router.use('/transactions', require('./transactionRoutes'));

module.exports = router;
