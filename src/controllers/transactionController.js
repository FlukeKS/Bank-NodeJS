const transactionService = require('../services/transactionService');

const transactionController = {};

transactionController.listTxns = async (req, res, next) => {
  try {
    const transactions = await transactionService.listTxns(req.user.id, req.query);
    res.json(transactions);
  } catch (err) {
    next(err);
  }
};

transactionController.createTxn = async (req, res, next) => {
  try {
    const result = await transactionService.createTxn(req.user.id, req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

transactionController.updateTxn = async (req, res, next) => {
  try {
    const result = await transactionService.updateTxn(req.user.id, req.params.id, req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

transactionController.deleteTxn = async (req, res, next) => {
  try {
    const result = await transactionService.deleteTxn(req.user.id, req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = transactionController;