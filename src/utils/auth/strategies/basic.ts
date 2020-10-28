import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import AuthServices from '../../../services/auth';

passport.use(new BasicStrategy(async (email, password, cb) => {
  const authServices = new AuthServices('auth');
  try {
    const user = await authServices.getOneUser({ email });
    if (!user) {
      return cb(boom.unauthorized(), false);
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return cb(boom.unauthorized(), false);
    }

    delete user.password;
    return cb(null, user);
  } catch (error) {
    cb(error);
  }
}))