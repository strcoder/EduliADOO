import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import boom from '@hapi/boom';

import UsersServices from './../../../services/users';
import { config } from './../../../config';

passport.use(
  new Strategy({
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }, async (tokenPayload, cb) => {
    const usersServices = new UsersServices();
    try {
      const user = await usersServices.getUserByEmail({ email: tokenPayload.email });
      if (!user) {
        cb(boom.unauthorized(), false);
      }

      delete user.password;
      cb(null, { ...user, scopes: tokenPayload.scopes });

    } catch (error) {
      cb(error)
    }
  })
);