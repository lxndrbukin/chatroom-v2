export type UserData = {
  userId: number;
  username: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  email: string;
  avatar: string;
};

export type SessionError = {
  [key: string]: string;
};

export type SessionProps = {
  isLoggedIn: boolean;
  data: UserData | undefined;
  errors: SessionError | undefined;
};
