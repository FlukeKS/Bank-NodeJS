const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Authorization header is missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Invalid or expired token' });
  }
};