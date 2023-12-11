import { takeEvery, call, select } from "redux-saga/effects";
import { selectDarkMode } from "./modesSlice";
import {
    saveDarkModePreferenceToLocalStorage,
} from "./modesLocalStorage";

function* saveModeToLocalStorageHandler() {
    try {
        const currentDarkMode = yield select(selectDarkMode);
        yield call(saveDarkModePreferenceToLocalStorage, currentDarkMode);
    } catch (error) {
        console.error('Error handling dark mode:', error);
    }
};

export function* modesSaga() {
    yield takeEvery("*", saveModeToLocalStorageHandler);
};