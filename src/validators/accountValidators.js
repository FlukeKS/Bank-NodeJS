const { z } = require('zod');

const createAccountSchema = z.object({
  accountNo: z.string().min(1),
  name: z.string().min(1)
});

const updateAccountSchema = z.object({
  name: z.string().min(1).optional(),
  status: z.enum(['active', 'frozen', 'closed']).optional()
});

const freezeSchema = z.object({
  status: z.enum(['active', 'frozen', 'closed'])
});

exports.createAccountSchema = z.object({
  accountNo: z.string().min(1),
  name: z.string().min(1)
});

module.exports = { createAccountSchema, updateAccountSchema, freezeSchema };