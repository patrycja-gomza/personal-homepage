import { all } from "redux-saga/effects";
import { projectsSaga } from "../features/PersonalHomepage/Portfolio/projectsSaga";
import { modesSaga } from "../common/ModeSwitch/modesSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga(),
        modesSaga(),
    ])
};