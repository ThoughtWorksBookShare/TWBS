require("!style-loader!css-loader!./../style/style.css");
import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";
import reducer from "./reducers/index";
import App from "./containers/App";
import SignIn from "./containers/signIn";
import signIn from "./middlewares/signIn";
const middleware = applyMiddleware(signIn);
const store = createStore(reducer, middleware);

render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SignIn}/>
        </Route>
    </Router>
</Provider>, document.getElementById("app"));
