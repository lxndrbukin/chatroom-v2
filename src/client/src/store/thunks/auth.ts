import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

type AuthFormValues = {
  username: string;
  password: string;
  confirmPassword?: string;
};

export const signup = createAsyncThunk(
  'session/signup',
  async (formValues: AuthFormValues, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/signup', { ...formValues });
      return res.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  }
);
