import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

type AuthData = {
  formData: {
    username: string;
    password: string;
  };
  pathname: string;
};

export const auth = createAsyncThunk(
  'session/auth',
  async ({ formData, pathname }: AuthData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/auth${pathname}`, { ...formData });
      return res.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  }
);

export const logout = createAsyncThunk('session/logout', async () => {
  const res = await axios.get('/auth/logout');
  return res.data;
});
