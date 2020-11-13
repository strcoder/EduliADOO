import joi from '@hapi/joi';

export const contact = {
  telephone: joi.number(),
  facebook: joi.string().uri(),
  twitter: joi.string().uri(),
  linkedin: joi.string().uri(),
  github: joi.string().uri(),
  instagram: joi.string().uri(),
  institutionalMail: joi.string().email(),
}

export default contact;
