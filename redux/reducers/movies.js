import * as type from "../types";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case type.GET_MOVIES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case type.GET_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.GET_MOVIEDETAILS_REQUESTED:
      return {
        movies: state.movies.find((f) => f._id === action.value._id),
        loading: false,
        error: action.message,
      };
    case type.GET_MOVIEDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case type.GET_MOVIEDETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.GET_LATEST_MOVIES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_LATEST_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case type.GET_LATEST_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.GET_LATEST_MOVIEDETAILS_REQUESTED:
      return {
        movies: state.movies.find((f) => f._id === action.value._id),
        loading: false,
        error: action.message,
      };
    case type.GET_LATEST_MOVIEDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case type.GET_LATEST_MOVIEDETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.GET_UPCOMING_MOVIES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case type.GET_UPCOMING_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.GET_UPCOMING_MOVIEDETAILS_REQUESTED:
      return {
        movies: state.movies.find((f) => f._id === action.value._id),
        loading: false,
        error: action.message,
      };
    case type.GET_UPCOMING_MOVIEDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case type.GET_UPCOMING_MOVIEDETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
