import { createSlice } from '@reduxjs/toolkit';
import { loadDarkModePreferenceFromLocalStorage } from './modesLocalStorage';

const modesSlice = createSlice({
    name: 'modes',
    initialState: {
        darkMode: loadDarkModePreferenceFromLocalStorage(),
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleDarkMode } = modesSlice.actions;

export const selectModeState = (state) => state.modes;
export const selectDarkMode = (state) => selectModeState(state).darkMode;

export default modesSlice.reducer;