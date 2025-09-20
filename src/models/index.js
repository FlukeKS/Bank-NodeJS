const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_FILE || path.join(__dirname, '../../data.sqlite'),
  logging: false,
});

const User = require('./user')(sequelize);
const Account = require('./account')(sequelize);
const Transaction = require('./transaction')(sequelize);

User.hasMany(Account, { foreignKey: 'userId', as: 'accounts' });
Account.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Account.hasMany(Transaction, { foreignKey: 'accountId', as: 'transactions' });
Transaction.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

module.exports = { sequelize, User, Account, Transaction };