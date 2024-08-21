import { Session } from 'express-session';

export enum ErrorMessages {
  UserNotFound = 'User not found.',
  UsernameInUse = 'Username already in use.',
  PasswordsDontMatch = 'Passwords do not match.',
  NotLoggedIn = 'Not logged in',
  PasswordFormat = 'Incorrect Password format.',
}

export type UserSession =
  | (Session & {
      userId: number;
      username: string;
    })
  | null;
