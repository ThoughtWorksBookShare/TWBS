import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";

import App from "./components/App";

import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import AddBook from "./containers/AddBook";
import ShowBooks from "./containers/ShowBooks";
import Book from "./containers/Book";
import ShowComments from "./containers/ShowComments";
import WantedBooks from "./components/WantedBooks";
import AddDesiredBook from "./containers/AddDesiredBook"
import Personal from "./components/Personal";
import MyBooks from "./components/MyBooks";
import MyWantedBooks from "./components/MyWantedBooks";
import MyComments from "./components/MyComments";
import PersonalInformation from "./components/PersonalInformation";

import reducer from "./reducers/index";

import signIn from "./middlewares/signIn";
import signUp from "./middlewares/signUp";
import addBook from "./middlewares/addBook";
import showBooks from "./middlewares/showBooks";
import getBook from "./middlewares/getBook";
import addBookComment from "./middlewares/addBookComment";
import showComments from "./middlewares/showComments";
import addDesiredBook from "./middlewares/addDesiredBook";

const middleware = applyMiddleware(signIn, signUp, addBook, showBooks, getBook,
    addBookComment, showComments, addDesiredBook);
const store = createStore(reducer, middleware);

render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SignIn}/>
            <Route path='signUp' component={SignUp}></Route>
            <Route path='books' component={ShowBooks}></Route>
            <Route path='books/addBook' component={AddBook}></Route>
            <Route path='books/book:bookId' component={Book}></Route>
            <Route path='books/book/addBookComment' component={Book}></Route>
            <Route path='comments' component={ShowComments}></Route>
            <Route path='wantedBooks' component={WantedBooks}></Route>
            <Route path='wantedBooks/addDesiredBook' component={AddDesiredBook}></Route>
            <Route path='personal' component={Personal}>
                <IndexRoute component={PersonalInformation}/>
                <Route path='myBooks' component={MyBooks}></Route>
                <Route path='myWantedBooks' component={MyWantedBooks}></Route>
                <Route path='myComments' component={MyComments}></Route>
            </Route>
        </Route>
    </Router>
</Provider>, document.getElementById("app"));
