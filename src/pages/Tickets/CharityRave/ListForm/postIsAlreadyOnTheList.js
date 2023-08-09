import axios from "axios";

export const postIsAlreadyOnTheList = async (email) => {

    const requestBody = {
        "email": email,
        "partyId": 1,
    };

    const response = await axios({
        url: process.env.API_URL + `/guestlist/already/`,
        method: "POST",
        data: requestBody,
    });

    if ((response.status !== 200) & (response.status !== 201)) {
        if (response.status === 401) {
            throw new Error(`Error! Unauthorized(401)`);
        } else {
            throw new Error(`Error! Status ${response.status}`);
        }
    }

    const already = response.data.already;
    return already

};