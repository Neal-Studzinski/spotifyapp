const initialState = {
    artistSearchResults: [],
    loadingResults: false
};




export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {

    case 'GO_TO_RESULTS_PAGE':
        return currentState;

    case 'RETURN_ARTISTS':
        return Object.assign({}, currentState, {
            artistSearchResults: action.artists
        });
  }

  console.log("Unhandled State!");
  return currentState;
}
