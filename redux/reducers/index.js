import { combineReducers } from "redux";
import movies from "./movies";
import events from "./events";

const rootReducer = combineReducers({
  movies: movies,
  events: events,
});

export default rootReducer;
