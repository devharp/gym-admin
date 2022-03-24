import { combineReducers } from "redux";
import performer from "./performer";

const reducers = combineReducers({
    sidebar: performer
});

export default reducers;