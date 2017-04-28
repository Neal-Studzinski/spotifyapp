import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ArtistResult extends React.Component {
    constructor(props) {
        super(props);
        this.handleVoteClick = this.handleVoteClick.bind(this);
    }

    handleVoteClick() {}

    render() {
        return (
            <a
                aria-label={`Visit ${this.props.artistName} on Spotify`}
                href={this.props.spotifyLink}
                className = 'artist-result'
                tab-index = '2'
            >
                <h3>{this.props.artistName}</h3>
                <img className = 'artist-image' src={this.props.artistImage} />

                <button
                    aria-label={`Vote for ${this.props.artistName}`}
                    role = 'button'
                    tab-index = '2'
                    onClick = {this.handleVoteClick}
                >
                Vote
                </button>
            </a>
        );
    }


}

export default connect()(ArtistResult);
