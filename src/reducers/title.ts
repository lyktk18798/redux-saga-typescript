import {FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS} from "../constants";
import produce from "immer";
import {TaskModel} from "../model/task-model";
import {TaskAction} from "../actiontypes";

export interface TaskState {
  isLoading: boolean;
  data: TaskModel[];
  status: string;
  message: string;
}
export const initialState: TaskState = {
  isLoading: false,
  data: [],
  status: "NOT_STARTED",
  message: "",
};
const titleReducer = (state = initialState, action: TaskAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_DATA:
        draft.isLoading = true;
        draft.data = [];
        draft.status = "IN_PROGRESS";
        break;

      case FETCH_DATA_SUCCESS:
        draft.isLoading = false;
        draft.data = action?.payload;
        draft.status = "SUCCESS";
        break;

      case FETCH_DATA_ERROR:
        draft.isLoading = true;
        draft.data = [];
        draft.status = "ERROR";
        draft.message = action?.payload;
        break;
    }
  });

export default titleReducer;
