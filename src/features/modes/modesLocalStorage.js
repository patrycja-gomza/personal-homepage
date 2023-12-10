export const saveDarkModePreferenceToLocalStorage = (darkMode) =>
    localStorage.setItem('darkMode', darkMode);

export const loadDarkModePreferenceFromLocalStorage = () => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === 'true';
};
