const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Account } = require('../models');

async function createUser({ name, email, password }) {
  const dupe = await User.findOne({ where: { email } });
  if (dupe) { const e = new Error('Email already registered'); e.status = 409; throw e; }
  const passwordHash = await bcrypt.hash(password, 10);
  return User.create({ name, email, passwordHash });
}

async function verifyCredentials({ email, password }) {
  const user = await User.findOne({ where: { email } });
  if (!user) { const e = new Error('Invalid credentials'); e.status = 401; throw e; }
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) { const e = new Error('Invalid credentials'); e.status = 401; throw e; }
  return user;
}

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'devsecret', { expiresIn: '1h' });
}

async function createAccount(userId, payload) {
  const { accountNo, name } = payload;
  return Account.create({
    userId,
    accountNo,
    name,
    status: 'active',
    balance: 0
  });
}

module.exports = { createUser, verifyCredentials, generateToken };
