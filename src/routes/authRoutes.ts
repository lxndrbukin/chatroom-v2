import passport from 'passport';
import { Express } from 'express';
import User from '../mongodb/models/user';
import { UserSession } from './types';
import { createPassword } from './helpers';

export const authRoutes = async (app: Express): Promise<void> => {
  app.post('/auth/signup', async (req, res) => {
    let error = {};
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      error = { ...error, username: 'Username already in use.' };
      return res.status(403).send(error);
    } else {
      const { username, password } = req.body;
      const userId = (await User.countDocuments()) + 1;
      user = await User.create({
        userId,
        username,
        password: await createPassword(password),
      });
    }
    req.session = {
      userId: user.userId,
      username: user.username,
    } as UserSession;
    passport.authenticate('local', { failureRedirect: '/login' })(
      req,
      res,
      () => {
        return res.send(user);
      }
    );
  });

  app.post('/auth/login', async (req, res) => {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      passport.authenticate('local', { failureRedirect: '/login' })(
        req,
        res,
        () => {
          return res.send(user);
        }
      );
    }
  });
};
