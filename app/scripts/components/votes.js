import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import container from "../containers/all.js";
import getVotes from "../actions/get_votes.js";

class Votes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Top Voted Artists </h1>
                <ul>
                    {this.props.votes.map(votedArtist => {
                        return (
                            <li>
                                <img
                                    className="artist-image"
                                    src={votedArtist[0].imgURL}
                                />
                                {" "}
                                {votedArtist[0].spotifyName}
                                {" "}
                                -
                                {" "}
                                {votedArtist.length}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(container.allState)(Votes);
