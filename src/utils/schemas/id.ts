import joi from '@hapi/joi';

export const idSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
