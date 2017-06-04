export default function getVotes() {
    return dispatch => {
        return $.ajax({
            type: "GET",
            url: "https://api.backendless.com/v1/data/BringTheBand",
            headers: {
                "application-id": "9C777047-FC7E-95A8-FFF1-A6DEDC3B9F00",
                "secret-key": "75F5A04C-C7D5-20B7-FF15-65AB5E690000",
                "application-type": "REST"
            },
            success: (data, status, xhr) => {
                console.log("here is the data", data);
                // dispatch({
                //     type: "RETURN_VOTES",
                //     votes: data
                // });
                dispatch({
                    type: "SORT_VOTES",
                    votes: data
                });
            },
            error: (data, status, xhr) => {
                console.log(data);
                console.log(status);
            }
        });
    };
}
