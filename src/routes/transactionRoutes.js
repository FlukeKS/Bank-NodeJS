const express = require('express');
const router = express.Router();

// Dummy route (รอคน D มาทำจริง)
router.get('/', (req, res) => {
  res.json({ message: 'Transaction route working' });
});

module.exports = router;
