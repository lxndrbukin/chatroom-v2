import { Session } from 'express-session';

export enum ErrorMessages {
  UserNotFound = 'User not found.',
  UsernameInUse = 'Username already in use.',
  PasswordsDontMatch = 'Passwords do not match.',
  NotLoggedIn = 'Not logged in',
  PasswordFormat = 'Password should be between 4 and 20 characters long. Should not contain special characters.',
}

export type UserSession =
  | (Session & {
      userId: number;
      username: string;
    })
  | null;
