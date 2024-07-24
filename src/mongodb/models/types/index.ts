export type UserProps = {
  userId: number;
  fullName: {
    firstName: string;
    lastName: string;
  };
  avatar: string;
  domain: string;
  email: string;
  password: string;
  signedUp: number;
};
