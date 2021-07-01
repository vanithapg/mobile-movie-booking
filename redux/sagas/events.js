import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = `http://localhost:6800/events`;
function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchEvents(action) {
  try {
    const events = yield call(getApi);
    yield put({ type: "GET_EVENTS_SUCCESS", events: events });
  } catch (e) {
    yield put({
      type: "GET_EVENTS_FAILED",
      message: e.message,
    });
  }
}

function* latestSaga() {
  yield takeEvery("GET_EVENTS_REQUESTED", fetchEvents);
}

export default latestSaga;
