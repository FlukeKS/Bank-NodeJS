const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/accountController');
const { auth } = require('../middlewares/auth');
const { validateBody } = require('../middlewares/validate');
const { createAccountSchema, updateAccountSchema, freezeSchema } = require('../validators/accountValidators');

router.use(auth);
router.get('/', ctrl.list);
router.post('/', validateBody(createAccountSchema), ctrl.create);
router.get('/:id', ctrl.get);
router.put('/:id', validateBody(updateAccountSchema), ctrl.update);
router.delete('/:id', ctrl.remove);
router.put('/:id/freeze', validateBody(freezeSchema), ctrl.freeze);

module.exports = router;