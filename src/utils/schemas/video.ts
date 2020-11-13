import joi from '@hapi/joi';
import { idSchema } from './id';

export const videoIdSchema = idSchema;
const videoNameSchema = joi.string();
const videoUrlSchema = joi.string().uri();
const videoDurationSchema = joi.number();
const videoLikesSchema = joi.number();

export const createVideoSchema = {
  name: videoNameSchema,
  url: videoUrlSchema,
  duration: videoDurationSchema,
  likes: videoLikesSchema,
}

export const updateVideoSchema = {
  name: videoNameSchema,
  url: videoUrlSchema,
  duration: videoDurationSchema,
  likes: videoLikesSchema,
}
