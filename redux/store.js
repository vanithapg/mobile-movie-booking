import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
