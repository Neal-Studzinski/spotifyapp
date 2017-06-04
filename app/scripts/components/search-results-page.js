import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import container from "../containers/all.js";
import doSearch from "../actions/do-search.js";
import ArtistResult from "./artist-result.js";
import SearchResultsContainer from "./search-results-container.js";
import getVotes from "../actions/get_votes.js";
import Votes from "../components/votes.js";

class SearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleVotes = this.handleVotes.bind(this);
    }

    search(searchTerm) {
        this.props.dispatch(doSearch(searchTerm));
    }

    componentWillMount() {
        let searchTerm = this.props.location.search;
        searchTerm = searchTerm.slice(3, searchTerm.length);
        this.search(searchTerm);
    }

    componentWillUpdate(nextProps) {
        let searchTerm = nextProps.location.search;
        searchTerm = searchTerm.slice(3, searchTerm.length);
        if (this.props.searchTerm !== nextProps.searchTerm)
            this.search(searchTerm);
    }

    handleVotes() {
        this.props.dispatch(getVotes());
        this.props.history.push("/votes");
        //this.props.dispatch("/votes");
        //to="/votes"
    }

    render() {
        return (
            <main>
                <h2>Search Results Page</h2>
                <button role="button" onClick={this.handleVotes}>
                    View Votes
                </button>

                <div className="search-results-container">
                    {this.props.artistSearchResults.map((artist, index) => {
                        return (
                            <ArtistResult
                                key={artist.id}
                                artistName={artist.artistName}
                                artistImage={artist.artistImage}
                                spotifyLink={artist.spotifylink}
                            />
                        );
                    })}
                </div>
            </main>
        );
    }
}

export default connect(container.allState)(SearchResultsPage);
