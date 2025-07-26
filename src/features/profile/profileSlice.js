import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
  const response = await axios.get('https://localhost:7101/api/myProfile');
  return response.data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetProfile: (state) => {
      state.data = {};
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});
export const { updateProfile, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
