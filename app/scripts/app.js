import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Signup from "./components/signup.js";
import Login from "./components/login.js";
import Header from "./components/header.js";
import Homepage from "./components/home-page.js";
import SearchResultsPage from "./components/search-results-page.js";
import Votes from "./components/votes.js";

export default function app() {
    render(
        <Provider store={store}>
            <Router>
                <div className="page-wrapper">
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/votes" component={Votes} />
                    <Route
                        exact
                        path="/search-results"
                        component={SearchResultsPage}
                    />

                </div>
            </Router>
        </Provider>,
        document.getElementById("app")
    );
}
