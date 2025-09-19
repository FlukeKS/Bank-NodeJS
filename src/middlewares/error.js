// src/middlewares/error.js
function notFound(req, res, next) {
  const e = new Error('Not Found');
  e.status = 404;
  next(e);
}
function errorHandler(err, req, res, next) {
  // Sequelize validation => 400
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      message: 'Validation error',
      details: err.errors?.map(e => ({ path: e.path, message: e.message }))
    });
  }
  // Unique constraint => 409
  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({
      message: 'Duplicate value',
      details: err.errors?.map(e => ({ path: e.path, message: e.message }))
    });
  }
  // Zod validation => 400
  if (err.name === 'ZodError') {
    return res.status(400).json({
      message: 'Invalid body',
      details: err.issues?.map(i => ({ path: i.path.join('.'), message: i.message }))
    });
  }
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
}
module.exports = { notFound, errorHandler };
