const userService = require('../services/userService'); 

async function register(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    const token = userService.generateToken(user);
    res.status(201).json({ user: { id: user.id, name: user.name, email: user.email }, token });
  } catch (e) { next(e); }
}

async function login(req, res, next) {
  try {
    const user = await userService.verifyCredentials(req.body);
    const token = userService.generateToken(user);
    res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
  } catch (e) { next(e); }
}

async function me(req, res) { res.json({ user: req.user }); }

module.exports = { register, login, me };