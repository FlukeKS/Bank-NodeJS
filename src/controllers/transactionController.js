const svc = require('../services/transactionService'); 

async function list(req, res, next) {
  try { res.json(await svc.listTxns(req.user.id, req.query)); }
  catch (e) { next(e); }
}
async function create(req, res, next) {
  try { res.status(201).json(await svc.createTxn(req.user.id, req.body)); }
  catch (e) { next(e); }
}
async function update(req, res, next) {
  try { res.json(await svc.updateTxn(req.user.id, req.params.id, req.body)); }
  catch (e) { next(e); }
}
async function remove(req, res, next) {
  try { await svc.deleteTxn(req.user.id, req.params.id); res.status(204).end(); }
  catch (e) { next(e); }
}

module.exports = { list, create, update, remove };