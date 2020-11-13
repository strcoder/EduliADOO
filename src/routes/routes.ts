import authApi from './auth';
import publicRequest from './public-request';
import basicRequest from './basic-request';
import compoundRequest from './compound-request';
import { createUserSchema } from './../utils/schemas/user';
import { areaIdSchema, createAreaSchema, updateAreaSchema } from '../utils/schemas/area';
import { fileIdSchema, createFileSchema, updateFileSchema } from './../utils/schemas/file';
import { eduliIdSchema, createEduliSchema, updateEduliSchema } from './../utils/schemas/eduli';
import { videoIdSchema, createVideoSchema, updateVideoSchema } from './../utils/schemas/video';
import { topicIdSchema, createTopicSchema, updateTopicSchema } from './../utils/schemas/topic';
import { levelIdSchema, createLevelSchema, updateLevelSchema } from './../utils/schemas/level';
import { courseIdSchema, createCourseSchema, updateCourseSchema } from './../utils/schemas/course';
import { managerIdSchema, createManagerSchema, updateManagerSchema } from './../utils/schemas/manager';
import { teacherIdSchema, createTeacherSchema, updateTeacherSchema } from './../utils/schemas/teacher';
import { studentIdSchema, createStudentSchema, updateStudentSchema } from './../utils/schemas/student';
import { instituteIdSchema, createInstituteSchema, updateInstituteSchema } from './../utils/schemas/institute';
// import { authIdScehma, createAuthSchema, updateAuthSchema } from '../utils/schemas/auth';

const routes = (app: any) => {
  //** Rutas para un usuario publico **//
  publicRequest(
    app,
    'eduli',
    '/api/eduli',
    {
      idSchema: eduliIdSchema,
      createSchema: createEduliSchema,
      updateSchema: updateEduliSchema,
    },
  );

  //** Rutas para el registro y login del usuario **//
  authApi(
    app,
    '/api/auth',
    createUserSchema,
  );

  //** Ruta para las institucion **//
  compoundRequest(
    app,
    'institute',
    '/api/institute',
    {
      idSchema: instituteIdSchema,
      createSchema: createInstituteSchema,
      updateSchema: updateInstituteSchema,
    },
    {
      getScope: ['read:institutes'],
      postScope: ['create:institutes'],
      putScope: ['update:institutes'],
      deleteScope: ['delete:institutes'],
    },
  );

  //** Rutas para las areas **//
  compoundRequest(
    app,
    'area',
    '/api/area',
    {
      idSchema: areaIdSchema,
      createSchema: createAreaSchema,
      updateSchema: updateAreaSchema,
    },
    {
      getScope: ['read:levels'],
      postScope: ['create:levels'],
      putScope: ['update:levels'],
      deleteScope: ['delete:levels'],
    },
  );

  //** Rutas para los niveles **//
  compoundRequest(
    app,
    'level',
    '/api/level',
    {
      idSchema: levelIdSchema,
      createSchema: createLevelSchema,
      updateSchema: updateLevelSchema,
    },
    {
      getScope: ['read:levels'],
      postScope: ['create:levels'],
      putScope: ['update:levels'],
      deleteScope: ['delete:levels'],
    },
  );

  //** Rutas para los cursos **//
  compoundRequest(
    app,
    'course',
    '/api/course',
    {
      idSchema: courseIdSchema,
      createSchema: createCourseSchema,
      updateSchema: updateCourseSchema,
    },
    {
      getScope: ['read:courses'],
      postScope: ['create:courses'],
      putScope: ['update:courses'],
      deleteScope: ['delete:courses'],
    },
  );

  //** Ruta para los actores **//
  compoundRequest(
    app,
    'users',
    '/api/user',
    {
      idSchema: teacherIdSchema,
      createSchema: createTeacherSchema,
      updateSchema: updateTeacherSchema,
    },
    {
      getScope: ['read:user'],
      postScope: ['create:user'],
      putScope: ['update:user'],
      deleteScope: ['delete:user'],
    },
  );
  basicRequest(
    app,
    'manager',
    '/api/manager',
    {
      idSchema: managerIdSchema,
      createSchema: createManagerSchema,
      updateSchema: updateManagerSchema,
    },
    {
      getScope: ['read:managers'],
      postScope: ['create:managers'],
      putScope: ['update:managers'],
      deleteScope: ['delete:managers'],
    },
  );
  compoundRequest(
    app,
    'teacher',
    '/api/teacher',
    {
      idSchema: teacherIdSchema,
      createSchema: createTeacherSchema,
      updateSchema: updateTeacherSchema,
    },
    {
      getScope: ['read:teachers'],
      postScope: ['create:teachers'],
      putScope: ['update:teachers'],
      deleteScope: ['delete:teachers'],
    },
  );
  compoundRequest(
    app,
    'student',
    '/api/student',
    {
      idSchema: studentIdSchema,
      createSchema: createStudentSchema,
      updateSchema: updateStudentSchema,
    },
    {
      getScope: ['read:students'],
      postScope: ['create:students'],
      putScope: ['update:students'],
      deleteScope: ['delete:students'],
    },
  );

  //** Rutas para los temas **//
  basicRequest(
    app,
    'topic',
    '/api/topic',
    {
      idSchema: topicIdSchema,
      createSchema: createTopicSchema,
      updateSchema: updateTopicSchema,
    },
    {
      getScope: ['read:topics'],
      postScope: ['create:topics'],
      putScope: ['update:topics'],
      deleteScope: ['delete:topics'],
    },
  );

  //** Rutas para los materiales **//
  basicRequest(
    app,
    'video',
    '/api/video',
    {
      idSchema: videoIdSchema,
      createSchema: createVideoSchema,
      updateSchema: updateVideoSchema,
    },
    {
      getScope: ['read:videos'],
      postScope: ['create:videos'],
      putScope: ['update:videos'],
      deleteScope: ['delete:videos'],
    },
  );

  basicRequest(
    app,
    'file',
    '/api/file',
    {
      idSchema: fileIdSchema,
      createSchema: createFileSchema,
      updateSchema: updateFileSchema,
    },
    {
      getScope: ['read:files'],
      postScope: ['create:files'],
      putScope: ['update:files'],
      deleteScope: ['delete:files'],
    },
  );
}

export default routes;
