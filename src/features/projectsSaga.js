import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getProjectsFromAPI } from "./getProjectsFromAPI";
import { fetchProjects, setProjects, setLoading } from "./projectsSlice";

function* fetchProjectsHandler() {
    try {
        yield put(setLoading(true));
        yield delay(5000);
        const projects = yield call(getProjectsFromAPI);
        yield put(setProjects(projects));
    }
    catch (error) {
        yield call(alert, "Error fetching projects!");
    }
    finally {
        yield put(setLoading(false));
    }
};

export function* projectsSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler);
};