export type UserProps = {
  userId: number;
  fullName: {
    firstName: string;
    lastName: string;
  };
  avatar: string;
  username: string;
  email: string;
  password: string;
  signedUp: number;
};
