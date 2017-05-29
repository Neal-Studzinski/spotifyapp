import doSearch from "../actions/do-search.js";

const initialState = {
    searchTerm: "",
    artistSearchResults: [],
    votes: {}
};

export default function AppReducer(currentState, action) {
    if (currentState === undefined) {
        return initialState;
    }

    switch (action.type) {
        case "LOGGED_IN":
            var newState = {
                usertoken: action.usertoken
            };
            return Object.assign({}, currentState, newState);

        case "UPDATE_PATH_QUERY":
            console.log("REDUCER: ", action.history);
            action.history.push(`/search-results?q=${action.searchTerm}`);
            return Object.assign({}, currentState, {
                searchTerm: action.searchTerm
            });

        case "RETURN_ARTISTS":
            return Object.assign({}, currentState, {
                artistSearchResults: action.artists
            });

        case "RETURN_VOTES":
            console.log(action.votes);
            newState = {
                //votes: action.votes
            };
            return Object.assign({}, currentState, newState);
    }

    console.log("Unhandled State!");
    return currentState;
}
