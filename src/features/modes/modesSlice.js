import { createSlice } from '@reduxjs/toolkit';

const modesSlice = createSlice({
    name: 'modes',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleDarkMode } = modesSlice.actions;
export const selectDarkMode = (state) => state.modes.darkMode;

export default modesSlice.reducer;