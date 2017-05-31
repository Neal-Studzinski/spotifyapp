import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import container from "../containers/all.js";
import doSearch from "../actions/do-search.js";
import ArtistResult from "./artist-result.js";
import SearchResultsContainer from "./search-results-container.js";

class SearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search(searchTerm) {
        // if ((searchTerm = "Katy Perry" || "katy perry")) {
        //     let artistSearchResults = ;
        // } else if ((searchTerm = "U2" || "u2")) {
        //     let artistSearchResults = getState().artistSearchResultsU2;
        // } else if ((searchTerm = "eminem" || "Eminem")) {
        //     let artistSearchResults = getState().artistSearchResultsEM;
        // } else if ((searchTerm = "Taylor Swift" || "taylor swift")) {
        //     let artistSearchResults = getState().artistSearchResultsTS;
        // } else if ((searchTerm = "tania bowra" || "Tania Bowra")) {
        //     let artistSearchResults = getState().artistSearchResultsTB;
        // }
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

    render() {
        return (
            <main>
                <h2>Search Results Page</h2>
                <Link className="link-button" to="/votes">See Votes!</Link>
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
