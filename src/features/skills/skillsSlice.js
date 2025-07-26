import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  const response = await axios.get('https://localhost:7101/api/skills');
  return response.data;
});

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addSkill: (state, action) => {
      state.data.push(action.payload);
    },
    updateSkill: (state, action) => {
      const index = state.data.findIndex(skill => skill.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    removeSkill: (state, action) => {
      state.data = state.data.filter(skill => skill.id !== action.payload);
    },
    resetSkills: (state) => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});
export const { addSkill, updateSkill, removeSkill, resetSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
