import joi from '@hapi/joi';
import { idSchema } from './id';

export const eduliIdSchema = idSchema;
const eduliNameSchema = joi.string();

export const createEduliSchema = {
  name: eduliNameSchema,
}

export const updateEduliSchema = {
  name: eduliNameSchema,
}
