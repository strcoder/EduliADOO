import express from 'express';
import Services from '../services/services';
import cacheResponse from './../utils/cacheResponse';
import validationHandler from '../utils/middleware/validationHandler';
import { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } from './../utils/time';
import './../utils/auth/strategies/jwt';

const api = (app: any, collection: any, route: any, schema: any) => {
  const { idSchema, createSchema, updateSchema } = schema;

  const router = express.Router();
  const services = new Services(collection);

  app.use(route, router);

  router.get('/',
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;
      try {
        const objects = await services.getList({ tags });
        res.status(200).json({
          data: objects,
          message: `${collection}s listed`
        });
      } catch (error) {
        next(error);
      }
    });

  router.get('/:objectId',
    validationHandler({ objectId: idSchema }, 'params'),

    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { objectId } = req.params;
      try {
        const object = await services.getOne({ objectId });
        res.status(200).json({
          data: object,
          message: `${collection} recived`,
        });
      } catch (error) {
        next(error);
      }
    });


  router.post('/',
    validationHandler(createSchema),

    async (req, res, next) => {
      const { body: object } = req;
      try {
        const createdId = await services.createOne({ object });
        res.status(201).json({
          data: createdId,
          message: `${collection} created`
        });
      } catch (error) {
        next(error);
      }
    });

  router.put('/:objectId',
    validationHandler({ objectId: idSchema }, 'params'),
    validationHandler(updateSchema),
    async (req, res, next) => {
      const { objectId } = req.params;
      const { body: object } = req;
      try {
        const updatedId = await services.updateOne({ objectId, object });
        res.status(200).json({
          data: updatedId,
          message: `${collection} updated`,
        });
      } catch (error) {
        next(error);
      }
    });

  router.delete('/:objectId',
    validationHandler({ objectId: idSchema }, 'params'),
    async (req, res, next) => {
      const { objectId } = req.params;
      try {
        const deletedId = await services.deleteOne({ objectId });
        res.status(200).json({
          data: deletedId,
          message: `${collection} deleted`
        });
      } catch (error) {
        next(error);
      }
    });
}

export default api;