import Artist from "../models/artist.js";

export default function doSearch(searchTerm) {
    return function(dispatch, getState) {
        let artistSearchResults;
        if (searchTerm === "Katy Perry" || searchTerm === "katy perry") {
            artistSearchResults = getState().artistSearchResultsKP[0];
        } else if (
            searchTerm === "Taylor Swift" ||
            searchTerm === "taylor swift"
        ) {
            artistSearchResults = getState().artistSearchResultsTS[0];
        } else if (searchTerm === "Eminem" || searchTerm === "eminem") {
            artistSearchResults = getState().artistSearchResultsEM[0];
        } else if (searchTerm === "U2" || searchTerm === "u2") {
            artistSearchResults = getState().artistSearchResultsU2[0];
        } else if (
            searchTerm === "tania bowra" ||
            searchTerm === "Tania Bowra"
        ) {
            artistSearchResults = getState().artistSearchResultsTB[0];
        }
        console.log(artistSearchResults);

        let foundArtists = artistSearchResults.artists.items.reduce(
            (building, artist, index) => {
                building.push(
                    new Artist({
                        id: artist.id,
                        artistName: artist.name,
                        artistImage: artist.images[0]
                            ? artist.images[0].url
                            : "https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg",
                        spotifyLink: artist.external_urls.spotify
                    })
                );

                return building;
            },
            []
        );

        console.log("found artists: ", foundArtists);
        dispatch({ type: "RETURN_ARTISTS", artists: foundArtists });
    };
}
