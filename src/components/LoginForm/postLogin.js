import axios from "axios";

export const postLogin = async (username, email, pwd) => {
    const apiUrl = process.env.API_URL + "/auth/login";
    const response = await axios(
        {
            url: apiUrl,
            method: "POST",
            data: {
                username: username,
                email: email,
                pwd: pwd,
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if ((response.status !== 200) & (response.status !== 201)) {
        if (response.status === 401) {
            throw new Error(`Error! Unauthorized(401)`);
        } else {
            throw new Error(`Error! Status ${response.status}`);
        }
    }
    return response.data.result.access
};