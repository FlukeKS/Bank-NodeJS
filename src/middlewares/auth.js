const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const h = req.headers.authorization;
  if (!h) return res.status(401).json({ message: 'Missing Authorization header' });
  const token = h.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'devsecret');
    req.user = payload; // { id, email, role }
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = { auth };
