import {RootState} from "../reducers";
import {createSelector} from "reselect";

const selectData = (state: RootState) => state.title.data;
const selectLoading = (state: RootState) => state.title.isLoading;

export const dataSelector = () => createSelector(selectData, (data) => data);
export const loadingSelector = () =>
  createSelector(selectLoading, (isLoading) => isLoading);
