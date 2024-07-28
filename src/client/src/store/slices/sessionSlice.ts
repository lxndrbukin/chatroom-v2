import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionProps, SessionError, UserData } from './types';
import { signup } from '../thunks/auth';

const initialState: SessionProps = {
  isLoggedIn: false,
  data: undefined,
  error: undefined,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      signup.fulfilled,
      (state: SessionProps, action: PayloadAction<UserData>) => {
        state.data = action.payload;
      }
    );
    builder.addCase(signup.rejected, (state: SessionProps, action) => {
      state.error = action.payload as SessionError;
    });
  },
});

export default sessionSlice.reducer;
