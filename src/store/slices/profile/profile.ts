import { combineReducers } from "redux";
import getProfileSlice from "./getProfileSlice";

const profile = combineReducers({
  getProfileSlice,
});

export default profile;
