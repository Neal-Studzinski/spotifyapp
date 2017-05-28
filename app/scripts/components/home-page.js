import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <h2>Home Page</h2>
                <Link className="link-button" to="/signup">Sign Up!</Link><br />
                <Link className="link-button" to="/login">Login!</Link>
            </main>
        );
    }
}

export default connect(container.allState)(Homepage);
