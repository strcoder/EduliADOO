import joi from '@hapi/joi';

export const authIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const authNameSchema = joi.string();
const authLastnameSchema = joi.string();
const authEmailSchema = joi.string().email();
const authPasswordSchema = joi.string().min(8);

export const createAuthSchema = {
  name: authNameSchema.required(),
  lastname: authLastnameSchema.required(),
  email: authEmailSchema.required(),
  password: authPasswordSchema.required(),
}

export const updateAuthSchema = {
  name: authNameSchema,
  lastname: authLastnameSchema,
  email: authEmailSchema,
  password: authPasswordSchema,
}