import axios from "axios";
import { emailContent } from './emailContent';

export const postEmail = async (email, language) => {

    const requestBody = {
        "sendto": email,
        "subject": "Schwerelos berlin | Charity Rave",
        "body": emailContent[language],
    };

    const response = await axios({
        url: process.env.API_URL + `/mail/`,
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