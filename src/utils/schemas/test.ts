import joi from '@hapi/joi';
import { idSchema } from './id';
import { createQuizSchema } from './quiz';

export const testIdSchema = idSchema;
const testNameSchema = joi.string();
const testDescriptionSchema = joi.string();
const testStatusSchema = joi.string();
const testQuizSchema = joi.object(createQuizSchema);
const testStartDateSchema = joi.date();
const testDeadlineSchema = joi.date();
const testDurationSchema = joi.number();
const testFileSchema = joi.string().uri();

export const createTestSchema = {
  name: testNameSchema,
  description: testDescriptionSchema,
  status: testStatusSchema,
  quiz: testQuizSchema,
  duration: testDurationSchema,
  startDate: testStartDateSchema,
  deadline: testDeadlineSchema,
  file: testFileSchema,
}

export const updateTestSchema = {
  name: testNameSchema,
  description: testDescriptionSchema,
  status: testStatusSchema,
  quiz: testQuizSchema,
  duration: testDurationSchema,
  startDate: testStartDateSchema,
  deadline: testDeadlineSchema,
  file: testFileSchema,
}
