import joi from '@hapi/joi';
import { idSchema } from './id';

export const quizIdSchema = idSchema;
const quizQuestionSchema = joi.string();
const quizOptionsSchema = joi.array().items(joi.string());
const quizAnswerSchema = joi.array().items(joi.string());

export const createQuizSchema = {
  question: quizQuestionSchema,
  options: quizOptionsSchema,
  answer: quizAnswerSchema,
}

export const updateQuizSchema = {
  question: quizQuestionSchema,
  options: quizOptionsSchema,
  answer: quizAnswerSchema,
}