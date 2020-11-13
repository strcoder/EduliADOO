import joi from '@hapi/joi';
import { idSchema } from './id';
import { createReviewSchema } from './review';

const levelCourse = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  reviews: joi.array().items(createReviewSchema),
  score: joi.number(),
}

const levelArea = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
}

const levelStudents = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  reviews: joi.array().items(createReviewSchema),
}

const levelTeachers = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  reviews: joi.array().items(createReviewSchema),
}

export const levelIdSchema = idSchema;
const levelAreaSchema = joi.object(levelArea);
const levelNameSchema = joi.string();
const levelColorSchema = joi.string();
const levelScoreSchema = joi.number();
const levelStatusSchema = joi.string();
const levelProjectSchema = joi.object();
const levelProgramSchema = joi.string().uri();
const levelCoursesSchema = joi.array().items(levelCourse);
const levelReviewsSchema = joi.array().items(createReviewSchema);
const levelTeachersSchema = joi.array().items(levelTeachers);
const levelStudentsSchema = joi.array().items(levelStudents);
const levelObjectivesSchema = joi.string();
const levelDescriptionSchema = joi.string();
const levelRequirementsSchema = joi.array().items(joi.string());

export const createLevelSchema = {
  name: levelNameSchema,
  area: levelAreaSchema,
  color: levelColorSchema,
  score: levelScoreSchema,
  status: levelStatusSchema,
  reviews: levelReviewsSchema,
  courses: levelCoursesSchema,
  program: levelProgramSchema,
  project: levelProjectSchema,
  teachers: levelTeachersSchema,
  students: levelStudentsSchema,
  objectives: levelObjectivesSchema,
  description: levelDescriptionSchema,
  requirements: levelRequirementsSchema,
}

export const updateLevelSchema = {
  name: levelNameSchema,
  area: levelAreaSchema,
  color: levelColorSchema,
  score: levelScoreSchema,
  status: levelStatusSchema,
  reviews: levelReviewsSchema,
  courses: levelCoursesSchema,
  program: levelProgramSchema,
  project: levelProjectSchema,
  teachers: levelTeachersSchema,
  students: levelStudentsSchema,
  objectives: levelObjectivesSchema,
  description: levelDescriptionSchema,
  requirements: levelRequirementsSchema,
}
