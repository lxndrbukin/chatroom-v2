import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionProps, SessionError, UserData } from './types';
import { auth, logout } from '../thunks/auth';
import { getCurrentUser } from '../thunks/currentUser';

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
      auth.fulfilled,
      (state: SessionProps, action: PayloadAction<UserData>) => {
        state.isLoggedIn = true;
        state.data = action.payload;
      }
    );
    builder.addCase(auth.rejected, (state: SessionProps, action) => {
      state.error = action.payload as SessionError;
    });
    builder.addCase(logout.fulfilled, (state: SessionProps) => {
      state.isLoggedIn = false;
      state.data = undefined;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.data = action.payload;
    });
  },
});

export default sessionSlice.reducer;
