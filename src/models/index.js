const { Sequelize } = require('sequelize');

// แก้ password ให้ตรงกับ PostgreSQL ของคุณ
const sequelize = new Sequelize('bank_db', 'postgres', 'รหัสผ่านของคุณ', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection to PostgreSQL has been established successfully.');
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
  }
})();

module.exports = sequelize;
