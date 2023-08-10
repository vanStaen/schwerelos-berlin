import axios from "axios";

export const postGuestlistsCountForParty = async () => {

    const requestBody = {
        "partyId": 1,
    };

    const response = await axios({
        url: process.env.API_URL + `/guestlist/count/`,
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

    const count = response.data.getGuestlistsForParty;
    return count

};