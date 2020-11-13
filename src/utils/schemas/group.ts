import joi from '@hapi/joi';
import { idSchema } from './id';

// const teacher = {
//   id: idSchema,
//   idRegister: joi.string(),
//   name: joi.string(),
//   lastname: joi.string(),
//   title: joi.string(),
//   contact,
// }

const student = {
  id: idSchema,
  idRegister: joi.string(),
  name: joi.string(),
  lastname: joi.string(),
  contact: joi.string().uri(),
}

const course = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  score: joi.number(),
}

export const groupIdSchema = idSchema;
const groupNameSchema = joi.string();
const groupLimitSchema = joi.number();
// const groupTeachersSchema = joi.array().items(teacher);
const groupStudentsSchema = joi.array().items(student);
const groupCoursesSchema = joi.array().items(course);

export const createGropuSchema = {
  name: groupNameSchema,
  limit: groupLimitSchema,
  // teachers: groupTeachersSchema,
  students: groupStudentsSchema,
  courses: groupCoursesSchema,
}

export const updateGropuSchema = {
  name: groupNameSchema,
  limit: groupLimitSchema,
  // teachers: groupTeachersSchema,
  students: groupStudentsSchema,
  courses: groupCoursesSchema,
}
