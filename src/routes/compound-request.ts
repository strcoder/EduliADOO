import express from 'express';
import passport from 'passport';
import Services from '../services/services';
import cacheResponse from './../utils/cacheResponse';
import validationHandler from '../utils/middleware/validationHandler';
import scopesValidationHandler from './../utils/middleware/scopesValidationHandler';
import { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } from './../utils/time';
import'./../utils/auth/strategies/jwt';

const api = (app: any, collection: any, route: any, schema: any, scopes: any) => {

  const { idSchema, createSchema, updateSchema } = schema;
  const { getScope, postScope, putScope, deleteScope } = scopes;

  const router = express.Router();
  const services = new Services(collection);

  app.use(route, router);

  router.get('/',
    // passport.authenticate('jwt', { session: false }),
    // scopesValidationHandler(getScope),

    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;
      try {
        const objects = await services.getList({ tags });
        res.status(200).json({
          data: objects,
          message: `${collection} listed`
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get('/:objectId',
    // passport.authenticate('jwt', { session: false }),
    // scopesValidationHandler(getScope),
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
    }
  );

  router.post('/',
    // passport.authenticate('jwt', { session: false }),
    // scopesValidationHandler(postScope),
    validationHandler(createSchema) ,

    async (req, res, next) => {
      const { body: object } = req;
      try {
        const createdObjectId = await services.createOne({ object });
        res.status(201).json({
          data: createdObjectId,
          message: `${collection} created`
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put('/:objectId',
    // passport.authenticate('jwt', { session: false }),
    // scopesValidationHandler(putScope),
    validationHandler({ objectId: idSchema }, 'params'),
    validationHandler(updateSchema),

    async (req, res, next) => {
      const { objectId } = req.params;
      const { body: object } = req;
      try {
        // let updateId, data = {};
        // for (const key in object) {
        //   Array.isArray(object[key]) ? data[key] = { $each: object[key] } : data[key] = object[key];
        //   updateId = Array.isArray(object[key])
        //     ? await services.updateObjectWithLists({ objectId: objectId, object: data })
        //     : await services.updateOne({ objectId: objectId, object: data });
        //   data = {};
        // }
        const updateId = await services.updateOne({ objectId: objectId, object });
        res.status(200).json({
          data: updateId,
          message: `${collection} updated`,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete('/:objectId',
    // passport.authenticate('jwt', { session: false }),
    // scopesValidationHandler(deleteScope),
    validationHandler({ objectId: idSchema }, 'params'),

    async (req, res, next) => {
      const { objectId } = req.params;
      const { query } = req;

      try {
        let deletedId;
        Object.entries(query).length !== 0
          ? deletedId = await services.deleteItem({ objectId, query })
          : deletedId = await services.deleteOne({ objectId });

        res.status(200).json({
          data: deletedId,
          message: `${collection} deleted`
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

export default api;
