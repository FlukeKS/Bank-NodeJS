require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync(); // ถ้าต้องการล้างตารางตอน dev ใช้ { force: true }
    app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));
  } catch (err) {
    console.error('DB init error:', err);
    process.exit(1);
  }
})();
