import { Express, Request, Response } from 'express';
import User from '../mongodb/models/user';
import { ErrorMessages, UserSession } from './types';
import { createPassword, checkPassword, comparePasswords } from './helpers';

export const authRoutes = async (app: Express): Promise<void> => {
  app.post('/auth/signup', async (req, res) => {
    let errors = {};
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      errors = { ...errors, username: ErrorMessages.UsernameInUse };
      return res.status(403).send(errors);
    } else {
      const { username, password, confirmPassword } = req.body;
      const userId = (await User.countDocuments()) + 1;
      if (!(await checkPassword(password))) {
        errors = { ...errors, password: ErrorMessages.PasswordFormat };
      }
      if (password !== confirmPassword) {
        errors = {
          ...errors,
          confirmPassword: ErrorMessages.PasswordsDontMatch,
        };
      }
      if (Object.keys(errors).length !== 0) return res.status(403).send(errors);
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
    return res.send(user);
  });

  app.post('/auth/login', async (req: Request, res: Response) => {
    let errors = {};
    const { username, password } = req.body;
    let user = await User.findOne({ username }).select(' -_id -__v');
    if (user && (await comparePasswords(user.password, password))) {
      (req.session as UserSession) = {
        userId: user.userId,
        username: user.username,
      } as UserSession;
      return res.send(user);
    }
    errors = { ...errors, username: ErrorMessages.UserNotFound };
    return res.send(errors);
  });

  app.get('/_api/current_user', async (req: Request, res: Response) => {
    if (req.session && (req.session as UserSession)!.userId) {
      const currentUser = await User.findOne({
        userId: (req.session as UserSession)!.userId,
      }).select('-_id -password -__v');
      if (currentUser) return res.send(currentUser);
    }
    return res.status(403).send({ message: ErrorMessages.NotLoggedIn });
  });

  app.get('/auth/logout', (req: Request, res: Response) => {
    (req.session as UserSession) = null;
    res.send({});
  });
};
