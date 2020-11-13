import joi from '@hapi/joi';
import { idSchema } from './id';
import { createTeamSchema } from './team';
import { contact } from './contact';

const pricings = {
  name: joi.string(),
  price: {
    month: joi.number(),
    year: joi.number(),
  },
  benefits: joi.array().items(joi.string()),
}

const areas = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
}

const levels = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  score: joi.number(),
}

const teacher = {
  id: idSchema,
  name: joi.string(),
  lastname: joi.string(),
  nickname: joi.string(),
  email: joi.string(),
}

// NEW
export const instituteIdSchema = idSchema;
const instituteNameSchema = joi.string();
const instituteDateFoundationSchema = joi.date();
const instituteSloganSchema = joi.string();
const instituteAddressSchema = joi.string();
const instituteAddressNumberSchema = joi.number();
const instituteCitySchema = joi.string();
const instituteCountrySchema = joi.string();
const instituteZipSchema = joi.number();
const instituteMisionSchema = joi.string();
const instituteVisionSchema = joi.string();
const instituteCallToActionSchema = joi.array().items(joi.string());
const instituteContactSchema = joi.object(contact);
const instituteAreasSchema = joi.array().items(areas);
const instituteLevelsSchema = joi.array().items(levels);
const institutePricingsSchema = joi.array().items(pricings);
const instituteTeamSchema = joi.array().items(createTeamSchema);
const instituteTeacherSchema = joi.array().items(teacher);

export const createInstituteSchema = {
  name: instituteNameSchema,
  slogan: instituteSloganSchema,
  dateFoundation: instituteDateFoundationSchema,
  address: instituteAddressSchema,
  addressNumber: instituteAddressNumberSchema,
  city: instituteCitySchema,
  country: instituteCountrySchema,
  zip: instituteZipSchema,
  mision: instituteMisionSchema,
  vision: instituteVisionSchema,
  callToAction: instituteCallToActionSchema,
  contact: instituteContactSchema,
  areas: instituteAreasSchema,
  levels: instituteLevelsSchema,
  pricings: institutePricingsSchema,
  team: instituteTeamSchema,
  teachers: instituteTeacherSchema,
}

export const updateInstituteSchema = {
  name: instituteNameSchema,
  slogan: instituteSloganSchema,
  dateFoundation: instituteDateFoundationSchema,
  address: instituteAddressSchema,
  addressNumber: instituteAddressNumberSchema,
  city: instituteCitySchema,
  country: instituteCountrySchema,
  zip: instituteZipSchema,
  mision: instituteMisionSchema,
  vision: instituteVisionSchema,
  callToAction: instituteCallToActionSchema,
  contact: instituteContactSchema,
  areas: instituteAreasSchema,
  levels: instituteLevelsSchema,
  pricings: institutePricingsSchema,
  team: instituteTeamSchema,
  teachers: instituteTeacherSchema,
}
