import {combineReducers} from "redux";
import signIn from "./signIn";
import signUp from "./signUp";
import addBook from "./addBook";

export default combineReducers({signIn,signUp,addBook});
