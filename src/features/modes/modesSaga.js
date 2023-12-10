import { takeEvery, put, call, select } from "redux-saga/effects";
import { toggleDarkMode, selectDarkMode } from "./modesSlice";
import {
    saveDarkModePreferenceToLocalStorage,
    loadDarkModePreferenceFromLocalStorage
} from "./modesLocalStorage";

function* toggleDarkModeHandler() {
    try {
        const darkModePreference = yield call(loadDarkModePreferenceFromLocalStorage);
        yield put(toggleDarkMode(darkModePreference));
        const currentDarkMode = yield select(selectDarkMode);
        yield call(saveDarkModePreferenceToLocalStorage, !currentDarkMode);
    } catch (error) {
        console.error('Error handling dark mode:', error);
    }
};

export function* modesSaga() {
    yield takeEvery(toggleDarkMode.type, toggleDarkModeHandler);
};