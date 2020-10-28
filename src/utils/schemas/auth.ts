import joi from '@hapi/joi';

export const authIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const authEmailSchema = joi.string().email();
const authPasswordSchema = joi.string().min(8);

export const createAuthSchema = {
  email: authEmailSchema.required(),
  password: authPasswordSchema.required(),
}

export const updateAuthSchema = {
  email: authEmailSchema,
  password: authPasswordSchema,
}