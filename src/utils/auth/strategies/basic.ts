import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';

import UsersService from './../../../services/users';

passport.use(new BasicStrategy(async (email, password, cb) => {
  const userService = new UsersService();
  try {
    const user = await userService.getUserByEmail({ email });
    if (!user) {
      return cb(boom.unauthorized(), false);
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return cb(boom.unauthorized(), false);
    }

    delete user.password;
    return cb(null, user);

  } catch (error) {
    return cb(error);
  }
}));