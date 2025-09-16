const { Transaction, Account } = require('../models');

async function createTxn(userId, { accountId, type, amount, note, occurredAt }) {
  const acc = await Account.findOne({ where: { id: accountId, userId } });
  if (!acc) { const e = new Error('Account not found'); e.status = 404; throw e; }

  const delta = type === 'income' ? Number(amount) : -Number(amount);
  const newBal = Number(acc.balance) + delta;
  if (newBal < 0) { const e = new Error('Insufficient balance'); e.status = 400; throw e; }

  await acc.update({ balance: newBal });
  return Transaction.create({ accountId, type, amount, note, occurredAt });
}

async function listTxns(userId, query = {}) {
  const where = {};
  if (query.accountId) where.accountId = query.accountId;
  if (query.type) where.type = query.type;
  return Transaction.findAll({ where, order: [['occurredAt', 'DESC']] });
}

async function getTxnOrThrow(userId, id) {
  const txn = await Transaction.findByPk(id);
  if (!txn) { const e = new Error('Transaction not found'); e.status = 404; throw e; }
  // ปกป้องสิทธิ์ผ่าน account.owner
  const acc = await Account.findByPk(txn.accountId);
  if (!acc || acc.userId !== userId) { const e = new Error('Forbidden'); e.status = 403; throw e; }
  return txn;
}

async function updateTxn(userId, id, payload) {
  // เพื่อความง่าย อนุญาตแก้เฉพาะ note/occurredAt (ไม่แก้ amount/type)
  const txn = await getTxnOrThrow(userId, id);
  await txn.update(payload);
  return txn;
}

async function deleteTxn(userId, id) {
  const txn = await getTxnOrThrow(userId, id);
  const acc = await Account.findByPk(txn.accountId);
  // คืนยอดกลับ
  const delta = txn.type === 'income' ? -Number(txn.amount) : Number(txn.amount);
  const newBal = Number(acc.balance) + delta;
  if (newBal < 0) { const e = new Error('Balance would be negative'); e.status = 400; throw e; }
  await acc.update({ balance: newBal });
  await txn.destroy();
}

module.exports = { createTxn, listTxns, updateTxn, deleteTxn };