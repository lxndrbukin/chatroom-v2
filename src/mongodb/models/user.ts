import mongoose, { Schema } from 'mongoose';
import { UserProps } from './types';

const userSchema = new Schema<UserProps>(
  {
    userId: Number,
    fullName: Object,
    username: { type: String, required: true },
    email: { type: String, default: null },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
    },
    signedUp: { type: Number, default: new Date().getTime() },
  },
  { versionKey: false }
);

const User = mongoose.model<UserProps>('users', userSchema);

export default User;
