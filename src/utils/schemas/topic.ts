import joi from '@hapi/joi';
import { idSchema } from './id';
import { createVideoSchema } from './video';
import { createFileSchema } from './file';

const commentary = {
  student: {
    id: idSchema,
    name: joi.string(),
  },
  comment: joi.string(),
  likes: joi.number(),
  reply: joi.array().items(joi.string()),
}

const link = {
  name: joi.string(),
  url: joi.string().uri(),
}

export const topicIdSchema = idSchema;
const topicNameSchema = joi.string();
const topicDescriptionSchema = joi.string();
const topicVideosSchema = joi.array().items(createVideoSchema);
const topicFilesSchema = joi.array().items(createFileSchema);
const topicCommentarySchema = joi.array().items(commentary);
const topicLinksSchema = joi.array().items(link);

export const createTopicSchema = {
  name: topicNameSchema,
  description: topicDescriptionSchema,
  video: topicVideosSchema,
  file: topicFilesSchema,
  commentary: topicCommentarySchema,
  links: topicLinksSchema,
}

export const updateTopicSchema = {
  name: topicNameSchema,
  description: topicDescriptionSchema,
  video: topicVideosSchema,
  file: topicFilesSchema,
  commentary: topicCommentarySchema,
  links: topicLinksSchema,
}
