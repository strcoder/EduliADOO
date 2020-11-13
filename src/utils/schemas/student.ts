import joi from '@hapi/joi';
import { idSchema } from './id';
import { createUserSchema, updateUserSchema } from './user';

export const studentIdSchema = idSchema;
const studentInstituteSchema = idSchema;
const studentLevelSchema = idSchema;
// const studentCoursesSchema = joi.array().items(idSchema);
const studentApprovedCoursesSchema = joi.array().items(idSchema);
const studentApprovedLevelsSchema = joi.array().items(idSchema);
const studentFailedCoursesSchema = joi.array().items(idSchema);
const studentFailedLevelsSchema = joi.array().items(idSchema);

export const createStudentSchema = {
  ...createUserSchema,
  institute: studentInstituteSchema,
  level: studentLevelSchema,
  approvedCourses: studentApprovedCoursesSchema,
  approvedLevels: studentApprovedLevelsSchema,
  failedLevels: studentFailedCoursesSchema,
  failedCourses: studentFailedLevelsSchema,
}

export const updateStudentSchema = {
  ...updateUserSchema,
  institute: studentInstituteSchema,
  level: studentLevelSchema,
  approvedCourses: studentApprovedCoursesSchema,
  approvedLevels: studentApprovedLevelsSchema,
  failedLevels: studentFailedCoursesSchema,
  failedCourses: studentFailedLevelsSchema,
}
