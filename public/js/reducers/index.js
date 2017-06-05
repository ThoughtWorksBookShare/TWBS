import {combineReducers} from "redux";
import signIn from "./signIn";
import signUp from "./signUp";
import addBook from "./addBook";
import showBooks from "./showBooks";
import book from "./book";
import showComments from "./showComments";
import addDesiredBook from "./addDesiredBook";
import wantedBooks from "./wantedBooks";
import personalInformation from "./personalInformation";

export default combineReducers({
    signIn,
    signUp,
    addBook,
    showBooks,
    book,
    showComments,
    addDesiredBook,
    wantedBooks,
    personalInformation
});
