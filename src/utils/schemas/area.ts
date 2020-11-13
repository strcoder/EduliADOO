import joi from '@hapi/joi';
import { idSchema } from './id';

const areaLevels = {
  id: idSchema,
  name: joi.string(),
  description: joi.string(),
  score: joi.number(),
}

export const areaIdSchema = idSchema;
const areaNameSchema = joi.string();
const areaDescriptionSchema = joi.string();
const areaObjectiveSchema = joi.string();
const areaLevelsSchema = joi.array().items(areaLevels);
const areaColorSchema = joi.string();
const areaStatusSchema = joi.string();

export const createAreaSchema = {
  name: areaNameSchema,
  description: areaDescriptionSchema,
  objective: areaObjectiveSchema,
  levels: areaLevelsSchema,
  color: areaColorSchema,
  status: areaStatusSchema,
}

export const updateAreaSchema = {
  name: areaNameSchema,
  description: areaDescriptionSchema,
  objective: areaObjectiveSchema,
  levels: areaLevelsSchema,
  color: areaColorSchema,
  status: areaStatusSchema,
}