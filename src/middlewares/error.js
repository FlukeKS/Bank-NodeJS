// 404 Not Found
function notFound(req, res, next) {
  res.status(404).json({ message: 'Not Found' });
}

// Global error handler
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    message: err.message || 'Internal Server Error',
    details: err.errors || null
  });
}

module.exports = { notFound, errorHandler };
