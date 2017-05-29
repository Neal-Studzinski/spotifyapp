import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import container from "../containers/all.js";
import saveVote from "../actions/save_vote.js";
import SearchResultsPage from "../components/search-results-page.js";

class ArtistResult extends React.Component {
    constructor(props) {
        super(props);
        this.handleVoting = this.handleVoting.bind(this);
    }

    handleVoting(event) {
        event.preventDefault();

        const name = this.props.artistName;

        const usertoken = this.props.usertoken;
        this.props.dispatch(saveVote(name, usertoken));
        console.log(name, usertoken);
    }

    render() {
        return (
            <a href={this.props.spotifyLink} className="artist-result">
                <h3>{this.props.artistName}</h3>
                <img className="artist-image" src={this.props.artistImage} />

                <button role="button" onClick={this.handleVoting}>
                    Vote
                </button>
            </a>
        );
    }
}

export default connect(container.allState)(ArtistResult);
