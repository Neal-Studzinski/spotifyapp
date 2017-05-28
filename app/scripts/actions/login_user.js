export default function loginUser(loginEmail, loginPassword) {
    return dispatch => {
        return $.ajax({
            type: "POST",
            url: "https://api.backendless.com/v1/users/login",
            headers: {
                "application-id": "9C777047-FC7E-95A8-FFF1-A6DEDC3B9F00",
                "secret-key": "75F5A04C-C7D5-20B7-FF15-65AB5E690000",
                "application-type": "REST",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                login: loginEmail,
                password: loginPassword
            }),
            success: (data, status, xhr) => {
                console.log(data["user-token"]);
                dispatch({
                    type: "LOGGED_IN",
                    usertoken: data["user-token"],
                    name: data.name
                });
            }
        });
    };
}
