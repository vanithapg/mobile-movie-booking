import { all } from "redux-saga/effects";
import recMovies from "./recommendedSagas";
import latest from "./latest";
import upcoming from "./upcoming";
import events from "./events";

export default function* rootSaga() {
  yield all([recMovies(), latest(), upcoming(), events()]);
}
