export default function saveVote(id, name, image, usertoken) {
    console.log(id, name, image, usertoken);
    return dispatch => {
        return $.ajax({
            type: "POST",
            url: "https://api.backendless.com/v1/data/BringTheBand",
            headers: {
                "application-id": "9C777047-FC7E-95A8-FFF1-A6DEDC3B9F00",
                "secret-key": "75F5A04C-C7D5-20B7-FF15-65AB5E690000",
                "user-token": usertoken,
                "application-type": "REST",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                imgURL: image,
                spotifyId: id,
                spotifyName: name
            }),
            success: (data, status, xhr) => {
                console.log(data);
            }
        });
    };
}
