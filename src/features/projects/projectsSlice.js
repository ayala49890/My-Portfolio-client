import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const response = await axios.get('https://localhost:7101/api/projects');
  return response.data;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.data.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.data.findIndex(project => project.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    removeProject: (state, action) => {
      state.data = state.data.filter(project => project.id !== action.payload);
    },
    resetProjects: (state) => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});
export const { addProject, updateProject, removeProject, resetProjectss } = projectsSlice.actions;
export default projectsSlice.reducer;
