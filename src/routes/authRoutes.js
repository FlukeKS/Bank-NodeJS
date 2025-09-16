const express = require('express');
const router = express.Router();

// Dummy route (รอคน B มาทำจริง)
router.get('/', (req, res) => {
  res.json({ message: 'Auth route working' });
});

module.exports = router;
