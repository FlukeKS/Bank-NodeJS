const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_FILE || path.join(__dirname, '../../data.sqlite'),
  logging: false,
});

// แก้ไขตรงนี้: ต้องส่งทั้ง sequelize และ DataTypes เข้าไป
const User = require('./user')(sequelize, DataTypes);
const Account = require('./account')(sequelize, DataTypes);
const Transaction = require('./transaction')(sequelize, DataTypes);

// Relations
User.hasMany(Account, { foreignKey: 'userId', as: 'accounts' });
Account.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Account.hasMany(Transaction, { foreignKey: 'accountId', as: 'transactions' });
Transaction.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

module.exports = { sequelize, User, Account, Transaction };