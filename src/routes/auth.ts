import express from 'express';
import passport from 'passport';
import boom from '@hapi/boom';
import jwt from 'jsonwebtoken';
import ApiKeysServices from '../services/apiKeys';
import AuthServices from '../services/auth';
import validationHandler from '../utils/middlewares/validationHandler';
import { createAuthSchema } from '../utils/schemas/auth';
import scopeValidationHandler from '../utils/middlewares/scopesValidationHandler';
import { config } from '../config';

import '../utils/auth/strategies/basic';

const authApi = (app: any) => {
  const router = express.Router();
  app.use('/api/auth', router);
  const apiKeysServices = new ApiKeysServices();
  const authServices = new AuthServices();

  router.post('/sign-in', (req, res, next) => {
    passport.authenticate('basic', (error, user) => {
      try {
        if (error || !user) {
          next(boom.unauthorized())
        }
        req.login(user, { session: false }, async (error) => {
          if (error) {
            next(error);
          }
          const apiKey = await apiKeysServices.getApiKeys({ token: config.apiKeyToken });
          if (!apiKey) {
            next(boom.unauthorized());
          }
          const { _id: id, email } = user;
          const payload = {
            sub: id,
            email,
            scopes: apiKey.scopes,
          }
          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '60m'
          });
          return res.status(200).json({
            token,
            user: { email },
          });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post('/sign-up', validationHandler(createAuthSchema), async (req, res, next) => {
    const { body: user } = req;
    // console.log('tu cola');
    // console.log(user);
    try {
      const userExist = await authServices.getOneUser({ email: user.email });
      if (userExist) {
        res.status(409).json({
          data: {},
          message: 'Hola mundo',
        });
      } else {
        const createUserId = await authServices.createUser({ user });
        res.status(200).json({
          data: createUserId,
          message: 'Ah perro, te creaste',
        });
      }
    } catch (error) {
      next(error);
    }
  });
}
export default authApi;