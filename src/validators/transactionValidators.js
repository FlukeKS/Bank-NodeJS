const { z } = require('zod');

const createTxnSchema = z.object({
  accountId: z.number().int().positive(),
  type: z.enum(['income', 'expense']),
  amount: z.number().positive(),
  note: z.string().optional(),
  occurredAt: z.coerce.date().optional()
});

const updateTxnSchema = z.object({
  note: z.string().optional(),
  occurredAt: z.coerce.date().optional()
});

module.exports = { createTxnSchema, updateTxnSchema };