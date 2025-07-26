// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../features/skills/skillsSlice';
import profileReducer from '../features/profile/profileSlice';
import experiencesReducer from '../features/experiences/experiencesSlice'; 
import projectsReducer from '../features/projects/projectsSlice'; 

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    profile: profileReducer,
    experiences: experiencesReducer, 
    projects: projectsReducer, 
}
});
export default store;