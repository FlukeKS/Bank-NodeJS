const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Account', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    accountNo: { type: DataTypes.STRING, allowNull: false, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('active', 'frozen', 'closed'), defaultValue: 'active' },
    balance: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 }
  }, { tableName: 'accounts' });
};