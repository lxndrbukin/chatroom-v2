import passport from 'passport';
import { Express } from 'express';
import { UserProps } from '../mongodb/models/types';
import User from '../mongodb/models/user';

export const authRoutes = (app: Express): void => {
  app.post('/auth/signup', async (req, res) => {
    // await User.findOne(
    //   { email: req.body.email },
    //   (err: Error, user: UserProps) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       passport.authenticate('local', { failureRedirect: '/login' })(
    //         req,
    //         res,
    //         () => {
    //           return res.send(user);
    //         }
    //       );
    //     }
    //   }
    // ).clone();

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      passport.authenticate('local', { failureRedirect: '/login' })(
        req,
        res,
        () => {
          return res.send(user);
        }
      );
    } else {
      const { email, password } = req.body;
      const userId = (await User.countDocuments()) + 1;
      user = await User.create({ userId, email, password });
    }
    return user;
  });
};
