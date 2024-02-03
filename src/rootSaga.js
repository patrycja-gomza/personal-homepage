import { all } from "redux-saga/effects";
import { projectsSaga } from "./PersonalHomepage/projectsSaga";
import { modesSaga } from "./PersonalHomepage/ModeSwitch/modesSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga(),
        modesSaga(),
    ])
};