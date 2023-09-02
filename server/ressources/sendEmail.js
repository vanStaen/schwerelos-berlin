
const axios = require("axios");
const emails = ["clement.vanstaen@gmail.com"];

const postEmail = async (email) => {
    const requestBody = {
        "sendto": email,
        "subject": "Schwerelos berlin | Charity Rave",
        "body": "<div><div>(EN) In case you missed it:</div><a href='https://www.schwerelos-berlin.com/pathfinder.jpg'>Link to map (to the partylocation)</a><br/><a href='https://www.schwerelos-berlin.com/pathfinder.jpg'>Link to the Timetable</a></div><br/><div><div>(DE) Falls ihr es verpasst habt:</div><a href='https://www.schwerelos-berlin.com/pathfinder.jpg'>Link zum Party  wegfinder</a><br/><a href='https://www.schwerelos-berlin.com/pathfinder.jpg'>Link zum Timetable</a></div>",
    };
    const response = await axios({
        url: "http://localhost:5000/mail/",
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

let i = 0;
while (i < emails.length) {
    console.log(i+1, "sent to", emails[i]);
    postEmail(emails[i])
    i++;
}

console.log("Script ran succesfully")