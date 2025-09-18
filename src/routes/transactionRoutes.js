const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/transactionController');
const { auth } = require('../middlewares/auth');
const { validateBody } = require('../middlewares/validate');
const { createTxnSchema, updateTxnSchema } = require('../validators/transactionValidators');

// ใช้ middleware สำหรับการตรวจสอบสิทธิ์
router.use(auth);

// เส้นทางสำหรับ Transactions
router.get('/', ctrl.list);
router.post('/', validateBody(createTxnSchema), ctrl.create);
router.put('/:id', validateBody(updateTxnSchema), ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;