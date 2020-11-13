import Joi from '@hapi/joi';
import { idSchema } from './id';
import { createUserSchema, updateUserSchema } from './user';

export const managerIdSchema = idSchema;
const managerPlanSchema = Joi.string();

export const createManagerSchema = {
  ...createUserSchema,
  plan: managerPlanSchema,
}

export const updateManagerSchema = {
  ...updateUserSchema,
  plan: managerPlanSchema,
}
