const localStorageKey = "darkMode";

export const saveDarkModePreferenceToLocalStorage = (darkMode) =>
    localStorage.setItem(localStorageKey, darkMode);

export const loadDarkModePreferenceFromLocalStorage = () => {
    const darkMode = localStorage.getItem(localStorageKey);
    return darkMode === 'true';
};