# Bank-NodeJS

Step 7 — ทดสอบเร็ว ๆ (ครบ GET/POST/PUT/DELETE)

สมัคร + ล็อกอิน
POST /api/auth/register { "name":"Troy", "email":"troy@test.com", "password":"123456" }
POST /api/auth/login รับ token

ใส่ Authorization: Bearer <token>
POST /api/accounts { "accountNo":"001", "name":"Main" }
GET /api/accounts
PUT /api/accounts/1 { "name":"Main Wallet" }
PUT /api/accounts/1/freeze { "status":"frozen" } (หรือ active/closed)
DELETE /api/accounts/1 (ถ้า balance เป็น 0)

ธุรกรรม
POST /api/transactions { "accountId":1, "type":"income", "amount":1000, "note":"salary" }
GET /api/transactions?accountId=1
PUT /api/transactions/1 { "note":"salary (edited)" }
DELETE /api/transactions/1 (ยอดคงเหลือถูก revert)
