import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  data: undefined,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

export default sessionSlice.reducer;
