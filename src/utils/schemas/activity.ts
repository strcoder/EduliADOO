import joi from '@hapi/joi';
import { idSchema } from './id';
import { createQuizSchema } from './quiz';

export const activityIdSchema = idSchema;
const activityNameSchema = joi.string();
const activityDescriptionSchema = joi.string();
const activityObjectiveSchema = joi.string();
const activityRequirementsSchema = joi.array().items(joi.string());
const activityFileSchema = joi.string().uri();
const activityStartDateSchema = joi.date();
const activityDeadlineSchema = joi.date();
const activityStatusSchema = joi.string();
const ativityQuizSchema = joi.array().items(createQuizSchema);

export const createActivitySchema = {
  name: activityNameSchema,
  description: activityDescriptionSchema,
  objective: activityObjectiveSchema,
  requirements: activityRequirementsSchema,
  file: activityFileSchema,
  startDate: activityStartDateSchema,
  deadline: activityDeadlineSchema,
  status: activityStatusSchema,
  quiz: ativityQuizSchema,
}

export const updateActivitySchema = {
  name: activityNameSchema,
  description: activityDescriptionSchema,
  objective: activityObjectiveSchema,
  requirements: activityRequirementsSchema,
  file: activityFileSchema,
  startDate: activityStartDateSchema,
  deadline: activityDeadlineSchema,
  status: activityStatusSchema,
  quiz: ativityQuizSchema,
}
