const { sequelize, User, Account, Transaction } = require('./src/models');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("✅ Database synced!");

    // สร้าง User
    const user = await User.create({ name: "Fiat", email: "fiat@test.com" });

    // สร้าง Account ของ User
    const account = await Account.create({
      userId: user.id,
      accountNo: "123456789",
      name: "Saving Account",
      balance: 5000
    });

    // สร้าง Transaction ของ Account
    await Transaction.create({
      type: "deposit",
      amount: 1000,
      accountId: account.id
    });

    // ดึง User + Account + Transaction ออกมาโชว์
    const result = await User.findOne({
      where: { id: user.id },
      include: { model: Account, include: Transaction }
    });

    console.log(JSON.stringify(result, null, 2));

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await sequelize.close();
  }
})();
