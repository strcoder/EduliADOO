import express from 'express';
import passport from 'passport';
import boom  from '@hapi/boom';
import jwt from 'jsonwebtoken';
import ApiKeysService from './../services/apiKeys';
import UsersServices from './../services/users';
import validationHandler from'./../utils/middleware/validationHandler';
// import { createUserSchema } from'./../utils/schemas/user';
import { config } from'./../config';
import './../utils/auth/strategies/basic'; // Basic strategy

const authApi = (app: any, route: string, registerSchema: any) => {
  const router = express.Router();
  app.use(route, router);
  const authService = new UsersServices();
  const apiKeysService = new ApiKeysService();

  router.post('/sign-in', async (req, res, next) => {
    passport.authenticate('basic', (error, user) => {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        req.login(user, { session: false }, async (error) => {
          if (error) {
            next(error);
          }
          const { _id: id, nickname, email, role, user: key } = user;

          const apiKeyToken = role === 'admin' ?
          config.adminApiKeysToken :
          role === 'manager' ?
          config.managerApiKeysToken :
            role === 'teacher' ?
            config.teacherApiKeysToken :
            role === 'student' ?
            config.studentApiKeysToken :
            role === 'public' ?
            config.publicApiKeysToken : null;

          const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });
          if (!apiKey) {
            next(boom.unauthorized());
          }
          const payload = {
            sub: id,
            email,
            nickname,
            scopes: apiKey.scopes,
          }
          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '60m'
          });
          return res.status(200).json({
            token,
            user: { id: key, nickname, email, role }
          });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post(`/sign-up`, validationHandler(registerSchema), async (req, res, next) => {
    const { body: user } = req;
    const userService = new UsersServices(user.role);
    try {
      const userExist = await authService.verifyUserExist(user);
      if (userExist) {
        res.status(409).json({
          data: [],
          message: 'User already exists'
        });
      } else {
        const auth = {
          role: user.role,
          email: user.email,
          nickname: user.nickname,
          password: user.password,
          user: '',
        }
        const createUserId = await userService.createUser({ user });
        auth.user = createUserId;
        await authService.createUser({ user: auth });
        res.status(201).json({
          data: createUserId,
          message: `${user.role} created`,
        });
      }
    } catch (error) {
      next(error);
    }
  });

  router.post(`/validate-user`, async (req, res, next) => {
    const { body: user } = req;
    try {
      const userExist = await authService.verifyUserExist(user);
      if (userExist) {
        res.status(409).json({
          data: {},
          message: 'User already exists'
        });
      } else {
        res.status(200).json({
          data: {},
          message: `User can register`,
        });
      }
    } catch (error) {
      next(error);
    }
  });
}

export default authApi;