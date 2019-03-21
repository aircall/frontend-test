import "regenerator-runtime/runtime";
import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import history from "../history";

const baseUrl = `https://aircall-job.herokuapp.com/activities`;

function* fetchActivities() {
    try {
        const response = yield call(fetch, baseUrl);
        const json = yield response.json();
        yield put({ type: "FETCH_ACTIVITIES_SUCCESS", payload: json });
    } catch (err) {
        console.error("Oh noes! A wild error appeared while fetching activities: ", err);
    }
}

function* fetchActivity({ payload: id }) {
    try {
        const response = yield call(fetch, `${baseUrl}/${id}`);
        const json = yield response.json();
        yield put({ type: "FETCH_ACTIVITY_SUCCESS", payload: json });
        yield call(history.push, `/call/${id}`);
    } catch (err) {
        console.error(`Oh noes! A wild error appeared while fetching activity: ${id}`, err);
    }
}

function* archiveActivity({ payload: id }) {
    try {
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify({
                is_archived: true
            })
        };
        const response = yield call(fetch, `${baseUrl}/${id}`, fetchOptions);
        const json = yield response.json();
        yield put({ type: "ARCHIVE_ACTIVITY_SUCCESS" });
        yield call(history.push, `/`);
    } catch (err) {
        console.error(`Oh noes! A wild error appeared while archiving activity: ${id}`, err);
    }
}

export default function* root() {
    yield takeEvery("FETCH_ACTIVITIES", fetchActivities);
    yield takeLatest("FETCH_ACTIVITY", fetchActivity);
    yield takeEvery("ARCHIVE_ACTIVITY", archiveActivity);
}