import * as type from "../types";

const initialState = {
  events: [],
  loading: false,
  error: null,
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case type.GET_EVENTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.events,
      };
    case type.GET_EVENTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
