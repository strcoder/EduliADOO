import joi from '@hapi/joi';
import { idSchema } from './id';
import { instituteIdSchema } from './institute';
import { contact } from './contact';

export const userIdScehma = idSchema;
const userIdRegisterSchema = joi.string();
const userNameSchema = joi.string().max(50);
const userLastNameSchema = joi.string().max(100);
const userNickNameSchema = joi.string().max(50);
const userEmailSchema = joi.string().email();
const userPasswordSchema = joi.string().min(8).max(50);
const userRoleSchema = joi.string();
const userThemeSchema = joi.string();
const userContactSchema = joi.object(contact);
const userAgeSchema = joi.number();
const userBirthdateSchema = joi.date();

export const createUserSchema = {
  age: userAgeSchema,
  role: userRoleSchema,
  name: userNameSchema,
  email: userEmailSchema,
  theme: userThemeSchema,
  contact: userContactSchema,
  lastname: userLastNameSchema,
  nickname: userNickNameSchema,
  password: userPasswordSchema,
  institute: instituteIdSchema,
  birthdate: userBirthdateSchema,
}

export const updateUserSchema = {
  age: userAgeSchema,
  role: userRoleSchema,
  name: userNameSchema,
  email: userEmailSchema,
  theme: userThemeSchema,
  contact: userContactSchema,
  lastname: userLastNameSchema,
  nickname: userNickNameSchema,
  password: userPasswordSchema,
  institute: instituteIdSchema,
  birthdate: userBirthdateSchema,
}
