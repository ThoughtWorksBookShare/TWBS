import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";

import App from "./containers/App";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import AddBook from "./containers/addBook";
import ShowBooks from "./containers/ShowBooks";
import Book from './containers/Book';

import reducer from "./reducers/index";

import signIn from "./middlewares/signIn";
import signUp from "./middlewares/signUp";
import addBook from "./middlewares/addBook";
import showBooks from "./middlewares/showBooks";

const middleware = applyMiddleware(signIn, signUp, addBook, showBooks);
const store = createStore(reducer, middleware);

render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SignIn}/>
            <Route path='signUp' component={SignUp}></Route>
            <Route path='books' component={ShowBooks}></Route>
            <Route path='books/addBook' component={AddBook}></Route>
            <Route path='books/bookId' component={Book}></Route>
        </Route>
    </Router>
</Provider>, document.getElementById("app"));
