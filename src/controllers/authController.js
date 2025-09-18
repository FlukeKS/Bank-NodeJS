exports.register = async (req, res, next) => {
  try {
    res.status(201).json({ id: user.id, email: user.email, token });
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    res.json({ user: { id: user.id, email: user.email }, token });
  } catch (err) { next(err); }
};

exports.logout = async (req, res, next) => {
  try { res.json({ message: 'Logged out successfully' }); }
  catch (err) { next(err); }
};

exports.me = async (req, res) => {
  res.json({ id: req.user.id, email: req.user.email, name: req.user.name });
};