import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = `http://3.17.216.66:4000/latest`;
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

function* fetchMovies(action) {
  try {
    const movies = yield call(getApi);
    yield put({ type: "GET_MOVIES_SUCCESS", movies: movies });
  } catch (e) {
    yield put({ type: "GET_MOVIES_FAILED", message: e.message });
  }
}

function* getMovie(action) {
  console.log("get one Movie");
  try {
    const movie = yield call(
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      `http://localhost:6800/recommended/${action.value._id}`
    );
    yield put({ type: "GET_MOVIEDETAILS_SUCCESS", movies: movie });
  } catch (e) {
    yield put({ type: "GET_MOVIEDETAILS_FAILED", message: e.message });
  }
}

function* movieSaga() {
  yield takeEvery("GET_MOVIES_REQUESTED", fetchMovies);
}

export default movieSaga;
