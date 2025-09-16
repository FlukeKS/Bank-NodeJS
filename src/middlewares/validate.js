const { ZodError } = require('zod');

function validateBody(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body); // validate + sanitize
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          message: 'Validation failed',
          details: err.errors,
        });
      }
      next(err);
    }
  };
}

module.exports = { validateBody };
