import joi from '@hapi/joi';
import { idSchema } from './id';
import { contact } from './contact';
import { createTestSchema } from './test';
import { createActivitySchema } from './activity';
import { createPartialSchema } from './partial';
import { createReviewSchema } from './review';

const teacher = {
  id: idSchema,
  name: joi.string(),
  lastname: joi.string(),
  nickname: joi.string(),
  // title: joi.string(),
  contact,
}

const student = {
  id: idSchema,
  name: joi.string(),
  lastname: joi.string(),
  nickname: joi.string(),
  contact: joi.string().uri(),
}

// const review = {
//   id: idSchema,
//   comment: joi.string(),
//   score: joi.number(),
// }

const level = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  score: joi.number(),
}

export const courseIdSchema = idSchema;
const courseNameSchema = joi.string();
const courseColorSchema = joi.string();
const courseDescriptionSchema = joi.string();
const courseObjectiveSchema = joi.string();
const courseRequirementsSchema = joi.array().items(joi.string());
const courseTeachersSchema = joi.array().items(teacher);
const courseStudentsSchema = joi.array().items(student);
const courseReviewsSchema = joi.array().items(createReviewSchema);
const coursePartialsSchema = joi.array().items(createPartialSchema);
const courseEvaluationSchema = joi.array().items(joi.string());
const courseExtraordinarySchema = joi.array().items(createTestSchema);
const courseProjectSchema = joi.array().items(createActivitySchema);
const courseLevelSchema = joi.object(level);
const courseStatusSchema = joi.string();
const courseScoreSchema = joi.number();

export const createCourseSchema = {
  name: courseNameSchema,
  color: courseColorSchema,
  description: courseDescriptionSchema,
  objective: courseObjectiveSchema,
  requirements: courseRequirementsSchema,
  teacher: courseTeachersSchema,
  students: courseStudentsSchema,
  reviews: courseReviewsSchema,
  partials: coursePartialsSchema,
  evaluation: courseEvaluationSchema,
  extraordinary: courseExtraordinarySchema,
  project: courseProjectSchema,
  level: courseLevelSchema,
  status: courseStatusSchema,
  score: courseScoreSchema,
}

export const updateCourseSchema = {
  name: courseNameSchema,
  color: courseColorSchema,
  description: courseDescriptionSchema,
  objective: courseObjectiveSchema,
  requirements: courseRequirementsSchema,
  teacher: courseTeachersSchema,
  students: courseStudentsSchema,
  reviews: courseReviewsSchema,
  partials: coursePartialsSchema,
  evaluation: courseEvaluationSchema,
  extraordinary: courseExtraordinarySchema,
  project: courseProjectSchema,
  level: courseLevelSchema,
  status: courseStatusSchema,
  score: courseScoreSchema,
}