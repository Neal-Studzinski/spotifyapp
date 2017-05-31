const client_id = "c70b4b9f382240bdb642c512309f6218";
const client_secret = "b13e14f455df43bea2706966e9611f34";

export default function authorize() {
    return function(dispatch) {
        console.log("Sending Authorization");
        return $.ajax({
            method: "POST",
            url: "https://accounts.spotify.com/api/token",
            grant_type: "client_credentials",
            dataType: "JSON",
            type: "JSON",
            headers: {
                Authorization: `Basic ${btoa(client_id + ":" + client_secret)}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type"
            }
        }).then(response => console.log(response));
    };
}
