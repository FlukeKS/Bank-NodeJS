const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController');
const { validateBody } = require('../middlewares/validate');
const { registerSchema, loginSchema } = require('../validators/authValidators');
const { auth } = require('../middlewares/auth');
const { register, login, logout } = require('../controllers/authController');


router.post('/register', validateBody(registerSchema), ctrl.register);
router.post('/login', validateBody(loginSchema), ctrl.login);
router.post('/logout', logout);   
router.get('/me', auth, ctrl.me);

module.exports = router;
