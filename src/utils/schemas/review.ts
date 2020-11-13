import joi from '@hapi/joi';
import { idSchema } from './id';

const reviewStudent = {
  id: idSchema,
  name: joi.string(),
  lastname: joi.string(),
};

export const reviewIdSchema = idSchema;
const reviewStudentSchema = joi.object(reviewStudent);
const reviewCommentSchema = joi.string();
const reviewScoreSchema = joi.number();

export const createReviewSchema = {
  comment: reviewCommentSchema,
  student: reviewStudentSchema,
  score: reviewScoreSchema,
}

export const updateReviewSchema = {
  comment: reviewCommentSchema,
  student: reviewStudentSchema,
  score: reviewScoreSchema,
}