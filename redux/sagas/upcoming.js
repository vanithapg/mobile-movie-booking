import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = `http://localhost:6800/upcoming`;
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

function* fetchUpcoming(action) {
  try {
    const movies = yield call(getApi);
    yield put({ type: "GET_UPCOMING_MOVIES_SUCCESS", movies: movies });
  } catch (e) {
    yield put({
      type: "GET_UPCOMING_MOVIES_FAILED",
      message: e.message,
    });
  }
}

function* getLatest(action) {
  console.log("get one Movie");
  try {
    const movie = yield call(
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      `http://localhost:6800/upcoming/${action.value._id}`
    );
    yield put({ type: "GET_UPCOMING_MOVIEDETAILS_SUCCESS", movies: movie });
  } catch (e) {
    yield put({ type: "GET_UPCOMING_MOVIEDETAILS_FAILED", message: e.message });
  }
}

function* latestSaga() {
  yield takeEvery("GET_UPCOMING_MOVIES_REQUESTED", fetchUpcoming);
}

export default latestSaga;
