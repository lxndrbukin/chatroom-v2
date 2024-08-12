import passport from 'passport';
import { UserProps } from '../mongodb/models/types';
import User from '../mongodb/models/user';

passport.serializeUser((user, done): void => {
  done(null, (user as UserProps).userId);
});

passport.deserializeUser((id: string, done) => {
  User.findById(id, (err: Error, user: UserProps | null) => {
    done(err, user);
  });
});
