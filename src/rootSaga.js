import { all } from "redux-saga/effects";
import { projectsSaga } from "./features/projects/projectsSaga";
import { modesSaga } from "./features/modes/modesSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga(),
        modesSaga(),
    ])
};