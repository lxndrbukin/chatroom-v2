import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type AuthFormValues = {
  email: string;
  password: string;
};

export const signup = createAsyncThunk(
  'session/signup',
  async (formValues: AuthFormValues) => {
    const res = await axios.post('/auth/signup', { ...formValues });
    return res.data;
  }
);
