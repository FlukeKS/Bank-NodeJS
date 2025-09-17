const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/transactionController');
const { validateBody } = require('../middlewares/validate');
const auth = require('../middlewares/auth'); // แก้ไข: import โดยตรง
const { createTxnSchema, updateTxnSchema } = require('../validators/transactionValidators');

// ใช้ middleware สำหรับการตรวจสอบสิทธิ์
router.use(auth);

// เส้นทางสำหรับ Transactions
router.get('/', ctrl.listTxns);
router.post('/', validateBody(createTxnSchema), ctrl.createTxn);
router.put('/:id', validateBody(updateTxnSchema), ctrl.updateTxn);
router.delete('/:id', ctrl.deleteTxn);

module.exports = router;