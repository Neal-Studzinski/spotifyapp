export default function signupNewUser(
    signupFullName,
    signupEmail,
    signupPassword
) {
    return dispatch => {
        return $.ajax({
            type: "POST",
            url: "https://api.backendless.com/v1/users/register",
            headers: {
                "application-id": "9C777047-FC7E-95A8-FFF1-A6DEDC3B9F00",
                "secret-key": "75F5A04C-C7D5-20B7-FF15-65AB5E690000",
                "application-type": "REST",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                name: signupFullName,
                email: signupEmail,
                password: signupPassword
            }),
            success: (data, status, xhr) => {}
        });
    };
}
