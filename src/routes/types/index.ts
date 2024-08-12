import { Session } from 'express-session';

export interface UserSession extends Session {
  userId: number;
  username: string;
}
