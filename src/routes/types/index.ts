import { Session } from 'express-session';

export type UserSession =
  | (Session & {
      userId: number;
      username: string;
    })
  | null;
