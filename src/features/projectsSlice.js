import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        loading: false,
        error: false,
    },
    reducers: {
        setProjects: (state, { payload: projects }) => {
            state.projects = projects;
        },
        setLoading: (state, { payload: loading }) => {
            state.loading = loading;
        },
        fetchProjects: () => { },
    },
});

export const { setProjects, setLoading, fetchProjects } = projectsSlice.actions;

export const selectProjectsState = state => state.projects;
export const selectProjects = state => selectProjectsState(state).projects;
export const selectLoading = state => selectProjectsState(state).loading;

export default projectsSlice.reducer;