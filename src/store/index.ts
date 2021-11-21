import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddileware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddileware));
sagaMiddileware.run(rootSaga);
export default store;
