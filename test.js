const sequelize = require('./src/models/index'); // path ต้องตรงกับไฟล์ index.js
const { DataTypes } = require('sequelize');

const Account = sequelize.define('Account', {
  username: DataTypes.STRING,
  balance: DataTypes.FLOAT,
});

(async () => {
  try {
    await sequelize.sync({ force: true }); // สร้าง table ใหม่
    console.log(' Tables created successfully.');
  } catch (err) {
    console.error(' Error creating tables:', err);
  } finally {
    await sequelize.close();
    console.log('Connection closed.');
  }
})();
