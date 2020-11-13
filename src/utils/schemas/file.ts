import joi from '@hapi/joi';
import { idSchema } from './id';

export const fileIdSchema = idSchema;
const fileNameSchema = joi.string();
const fileDescriptionSchema = joi.string();
const fileDownloadsSchema = joi.string();
const fileUrlSchema = joi.string().uri();

export const createFileSchema = {
  name: fileNameSchema,
  description: fileDescriptionSchema,
  download: fileDownloadsSchema,
  url: fileUrlSchema,
}

export const updateFileSchema = {
  name: fileNameSchema,
  description: fileDescriptionSchema,
  download: fileDownloadsSchema,
  url: fileUrlSchema,
}