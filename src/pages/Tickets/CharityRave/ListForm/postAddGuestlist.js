import axios from "axios";

export const postAddGuestlist = async (name, email, ) => {
    const apiUrl = process.env.API_URL + "/guestlist/";
    const response = await axios(
        {
            url: apiUrl,
            method: "POST",
            data: {
                "guestlistInput":  {
                    name: name,
                    email: email,
                    artistId: 0, // 0: Schwerelos
                    partyId: 1,
                    listType: 3, // 3: payList
                }
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if ((response.status !== 200) & (response.status !== 201) & (response.status !== 403)) {
        if (response.status === 401) {
            throw new Error(`Error! Unauthorized(401)`);
        } else {
            throw new Error(`Error! Status ${response.status}`);
        }
    }

    return response.data.result
};