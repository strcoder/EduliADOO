import joi from '@hapi/joi';
import { idSchema } from './id';

const socialMedia = {
  facebook: joi.string().uri(),
  twitter: joi.string().uri(),
  linkedin: joi.string().uri(),
  instagram: joi.string().uri(),
}
export const teamIdScehma = idSchema;
const teamNameSchema = joi.string();
const teamTitleSchema = joi.string();
const teamSocialMediaSchema = joi.object(socialMedia);
// const teamAdminSchema = joi.bool();

export const createTeamSchema = {
  name: teamNameSchema,
  title: teamTitleSchema,
  socialMedia: teamSocialMediaSchema,
}

export const updateTeamSchema = {
  name: teamNameSchema,
  title: teamTitleSchema,
  socialMedia: teamSocialMediaSchema,
}
