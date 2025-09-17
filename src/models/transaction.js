module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    type: {
      type: DataTypes.ENUM('income', 'expense'),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    note: {
      type: DataTypes.STRING,
    },
    occurredAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
  return Transaction;
};