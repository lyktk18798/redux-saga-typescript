import {FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS,} from "../constants";
import {TaskModel} from "../model/task-model";

export interface TaskFetchDataAction {
  type: typeof FETCH_DATA;
}

export interface TaskFetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: TaskModel[];
}

export interface TaskFetchDataErrorAction {
  type: typeof FETCH_DATA_ERROR;
  payload: string;
}

export type TaskAction =
  | TaskFetchDataAction
  | TaskFetchDataSuccessAction
  | TaskFetchDataErrorAction;
