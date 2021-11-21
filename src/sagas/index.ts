import {all, fork} from "redux-saga/effects";
import fetchTitles from "./title";

export default function* rootSaga() {
  yield all([fork(fetchTitles)]);
}
