import { combineReducers, } from "redux";
import sticks from "./sticks";
import nextId from "./nextId";

const rootReducer = combineReducers({
  sticks,
  nextId,
})

export default rootReducer;

