import joi from '@hapi/joi';
import { idSchema } from './id';

export const authIdScehma = idSchema;
const authNickNameSchema = joi.string().max(50);
const authEmailSchema = joi.string().email();
const authPasswordSchema = joi.string().min(8).max(50);
const authUserScehma = joi.string();
const authRoleSchema = joi.string().equal('admin' || 'manager' || 'teacher' || 'student',);

export const createAuthSchema = {
  role: authRoleSchema,
  email: authEmailSchema,
  nickname: authNickNameSchema,
  password: authPasswordSchema,
  user: authUserScehma,
}

export const updateAuthSchema = {
  email: authEmailSchema,
  nickname: authNickNameSchema,
  password: authPasswordSchema,
  user: authUserScehma,
  role: authRoleSchema,
}
