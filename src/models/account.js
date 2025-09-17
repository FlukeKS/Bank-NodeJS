// import DataTypes มาใช้
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // สร้างตาราง Account
  const Account = sequelize.define("Account", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    }
  });

  return Account;
};
