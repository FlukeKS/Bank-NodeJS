const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Transaction', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    accountId: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.ENUM('income', 'expense', 'transfer_in', 'transfer_out'), allowNull: false },
    amount: { type: DataTypes.DECIMAL(12, 2), allowNull: false, validate: { min: 0.01 } },
    note: { type: DataTypes.STRING },
    occurredAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, { tableName: 'transactions' });
};