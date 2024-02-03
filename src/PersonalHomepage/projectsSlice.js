import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        loading: false,
        error: null,
    },
    reducers: {
        setProjects: (state, { payload: projects }) => {
            state.projects = projects;
        },
        setLoading: (state, { payload: loading }) => {
            state.loading = loading;
        },
        setError: (state, { payload: error }) => {
            state.error = error;
        },
        fetchProjects: () => { },
    },
});

export const {
    setProjects,
    setLoading,
    setError,
    fetchProjects
} = projectsSlice.actions;

export const selectProjectsState = state => state.projects;
export const selectProjects = state => selectProjectsState(state).projects;
export const selectLoading = state => selectProjectsState(state).loading;
export const selectError = state => selectProjectsState(state).error;

export default projectsSlice.reducer;