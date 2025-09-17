// ต้อง import DataTypes จาก sequelize มาใช้
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // สร้างตาราง User
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,      // ใช้ INTEGER เป็น primary key
      autoIncrement: true,          // ให้เพิ่มเองอัตโนมัติ
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false              // ห้ามเป็นค่าว่าง
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};
