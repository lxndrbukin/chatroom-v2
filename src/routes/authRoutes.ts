import passport from 'passport';
import { Express, Request, Response } from 'express';
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
    (req.session as UserSession) = {
      userId: user.userId,
      username: user.username,
    } as UserSession;
    // passport.authenticate('local', { failureRedirect: '/login' })(
    //   req,
    //   res,
    //   () => {
    //     return res.send(user);
    //   }
    // );
    return res.send(user);
  });

  app.post('/auth/login', async (req: Request, res: Response) => {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      (req.session as UserSession) = {
        userId: user.userId,
        username: user.username,
      } as UserSession;
      // passport.authenticate('local', { failureRedirect: '/login' })(
      //   req,
      //   res,
      //   () => {
      //     return res.send(user);
      //   }
      // );
      return res.send(user);
    }
  });

  app.get('/_api/current_user', async (req: Request, res: Response) => {
    if (req.session && (req.session as UserSession)!.userId) {
      const currentUser = await User.findOne({
        userId: (req.session as UserSession)!.userId,
      }).select('-_id -pasword -__v');
      if (currentUser) return res.send(currentUser);
    }
    return res.status(403).send({ message: 'Not logged in' });
  });

  app.get('/auth/logout', (req: Request, res: Response) => {
    (req.session as UserSession) = null;
    res.send({});
  });
};
