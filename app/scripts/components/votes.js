import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import container from "../containers/all.js";
import getVotes from "../actions/get_votes.js";

class Votes extends React.Component {
    constructor(props) {
        super(props);
    }

    getTheVotes() {
        this.props.dispatch(getVotes());
        //console.log(data);
    }

    render() {
        return (
            <div>
                <h1> Header </h1>
                <ul>
                    {this.getTheVotes()}

                </ul>
            </div>
        );
    }
}

export default connect(container.allState)(Votes);
