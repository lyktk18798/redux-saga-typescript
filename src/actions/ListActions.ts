import {TaskModel} from "../model/task-model";
import * as actionType from "../constants";
import {TaskFetchDataAction, TaskFetchDataErrorAction, TaskFetchDataSuccessAction,} from "../actiontypes";

export const fetchData = (): TaskFetchDataAction => ({
  type: actionType.FETCH_DATA,
});
export const fetchDataSuccess = (
  payload: TaskModel[]
): TaskFetchDataSuccessAction => ({
  type: actionType.FETCH_DATA_SUCCESS,
  payload,
});
export const fetchDataError = (payload: string): TaskFetchDataErrorAction => ({
  type: actionType.FETCH_DATA_ERROR,
  payload,
});
