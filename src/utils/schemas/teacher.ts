import joi from '@hapi/joi';
import { idSchema } from './id';
import { createUserSchema, updateUserSchema } from './user';

const course = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  status: joi.string(),
  score: joi.number(),
}

export const teacherIdSchema = idSchema;
const teacherCoursesSchema = joi.array().items(course);
const teacherVideosSchema = joi.array().items(idSchema);
const teacherFilesSchema = joi.array().items(idSchema);
const teacherApprovedCoursesSchema = joi.array().items(idSchema);
const teacherFailedCoursesSchema = joi.array().items(idSchema);

export const createTeacherSchema = {
  ...createUserSchema,
  courses: teacherCoursesSchema,
  videos: teacherVideosSchema,
  files: teacherFilesSchema,
  approvedCourses: teacherApprovedCoursesSchema,
  failedCourses: teacherFailedCoursesSchema,
}

export const updateTeacherSchema = {
  ...updateUserSchema,
  courses: teacherCoursesSchema,
  videos: teacherVideosSchema,
  files: teacherFilesSchema,
  approvedCourses: teacherApprovedCoursesSchema,
  failedCourses: teacherFailedCoursesSchema,
}
