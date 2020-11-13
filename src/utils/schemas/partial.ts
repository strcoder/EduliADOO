import joi from '@hapi/joi';
import { idSchema } from './id';
import { createTestSchema } from './test';
import { createTopicSchema } from './topic';

export const partialIdSchema = idSchema;
const partialNameSchema = joi.string();
const partialTestSchema = joi.object(createTestSchema);
const partialTopicsSchema = joi.array().items(createTopicSchema);

export const createPartialSchema = {
  name: partialNameSchema,
  topics: partialTopicsSchema,
  test: partialTestSchema,
}

export const updatePartialSchema = {
  name: partialNameSchema,
  topics: partialTopicsSchema,
  test: partialTestSchema,
}