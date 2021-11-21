import {fetchDataError, fetchDataSuccess} from "../actions/ListActions";
import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_DATA} from "../constants";
import {fetchDataTitle} from "../service/task-service";

export function* fetchDataSource1() {
  try {
    const { data } = yield call(fetchDataTitle);
    yield put(fetchDataSuccess(data?.items));
  } catch (err) {
    console.log(err);
    yield put(fetchDataError(err.message));
  }
}

export default function* fetchTitles() {
  yield takeLatest(FETCH_DATA, fetchDataSource1);
}
