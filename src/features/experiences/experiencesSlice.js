import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExperiences = createAsyncThunk('experiences/fetchExperiences', async () => {
  const response = await axios.get('https://localhost:7101/api/experience');
  return response.data;
});

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addExperience: (state, action) => {
      state.data.push(action.payload);
    },
    updateExperience: (state, action) => {
      const index = state.data.findIndex(experience => experience.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    removeExperience: (state, action) => {
      state.data = state.data.filter(experience => experience.id !== action.payload);
    },
    resetExperiences: (state) => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});
export const { addExperience, updateExperience, removeExperience, resetExperiences } = experiencesSlice.actions;
export default experiencesSlice.reducer;
