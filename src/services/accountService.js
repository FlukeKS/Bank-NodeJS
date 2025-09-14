const { Account } = require('../models');

async function createAccount(userId, payload) {
  return Account.create({ ...payload, userId });
}

async function listAccounts(userId) {
  return Account.findAll({ where: { userId } });
}

async function getAccountOrThrow(userId, id) {
  const acc = await Account.findOne({ where: { id, userId } });
  if (!acc) { const e = new Error('Account not found'); e.status = 404; throw e; }
  return acc;
}

async function updateAccount(userId, id, payload) {
  const acc = await getAccountOrThrow(userId, id);
  await acc.update(payload);
  return acc;
}

async function deleteAccount(userId, id) {
  const acc = await getAccountOrThrow(userId, id);
  if (Number(acc.balance) !== 0) {
    const e = new Error('Cannot delete account with non-zero balance');
    e.status = 400; throw e;
  }
  await acc.destroy();
}

async function setStatus(userId, id, status) {
  const acc = await getAccountOrThrow(userId, id);
  await acc.update({ status });
  return acc;
}

module.exports = {
  createAccount, listAccounts, updateAccount, deleteAccount,
  getAccountOrThrow, setStatus
};