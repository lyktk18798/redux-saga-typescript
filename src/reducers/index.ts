import {combineReducers} from "redux";
import titleReducer from "./title";

const rootReducer = combineReducers({
  title: titleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
