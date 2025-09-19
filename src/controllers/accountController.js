const svc = require('../services/accountService'); 
const service = require('../services/accountService');


async function list(req, res, next) { try { res.json(await svc.listAccounts(req.user.id)); } catch (e) { next(e); } }
async function create(req, res, next) { try { res.status(201).json(await svc.createAccount(req.user.id, req.body)); } catch (e) { next(e); } }
async function get(req, res, next) { try { res.json(await svc.getAccountOrThrow(req.user.id, req.params.id)); } catch (e) { next(e); } }
async function update(req, res, next) { try { res.json(await svc.updateAccount(req.user.id, req.params.id, req.body)); } catch (e) { next(e); } }
async function remove(req, res, next) { try { await svc.deleteAccount(req.user.id, req.params.id); res.status(204).end(); } catch (e) { next(e); } }
async function freeze(req, res, next) { try { res.json(await svc.setStatus(req.user.id, req.params.id, req.body.status)); } catch (e) { next(e); } }
exports.create = async (req, res, next) => {
  try {
    const acc = await service.createAccount(req.user.id, req.body);
    res.status(201).json(acc);
  } catch (err) { next(err); }
};

module.exports = { list, create, get, update, remove, freeze };
