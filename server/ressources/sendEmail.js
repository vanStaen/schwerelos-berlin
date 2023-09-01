
const axios = require("axios");
const emails = ["email@email.com"];

const postEmail = async (email) => {
    const requestBody = {
        "sendto": email,
        "subject": "Schwerelos berlin | Charity Rave",
        "body": "<div><i>English version below</i><br/><br/></div><div>###########</div><div>Hallo zusammen,<br/><br/>Morgen ist es soweit – unsere Veranstaltung <b>'Charity low gravity'</b> steht vor der Tür. Wir freuen uns wirklich sehr darauf.<br/>Hier sind noch einmal die letzten Informationen für euch:<br/><br/>Ihr habt euch ja bereits registriert, richtig? An der Kasse einfach euren Namen nennen und für 15€ seid ihr dabei.<br/><br/>Wir haben talentierte DJs engagiert, die mit ihren Sets für gute Stimmung sorgen werden. Den genauen Ablauf könnt ihr im Anhang finden.<br/><br/>Um 21 Uhr wird eine Runde Bingo mit den Bingo Brudis stattfinden – da könnt ihr gerne mitmachen. Für diejenigen unter euch, die sich im Festival-Modus befinden: An der Glitzerstation könnt ihr euch ein wenig verschönern.<br/><br/>Da wir uns inmitten der Natur befinden, bitten wir euch darum, auf die Umwelt zu achten und keinen Müll liegen zu lassen. Die entsprechenden Regeln sind <a href='https://www.schwerelos-berlin.com/gardenrules.jpg'>hier zu finden</a>.<br/><br/>Gewalt hat bei uns keinen Platz. Wir tolerieren keinerlei Form von aggressivem Verhalten. Wer sich nicht daran halten kann, wird des Geländes verwiesen.<br/><br/>Wir freuen uns wirklich sehr auf euer Kommen!<br/>Eure Schwerelos Crew 🚀<br/><br/></div><div>###########</div><div>Hello everyone,<br/><br/>Tomorrow is the day – our <b>'Charity Low Gravity'</b> event is right around the corner. We're really looking forward to it. Here's the latest information for you once again:<br/><br/>You've already registered, right? Just give your name at the entrance, and for €15 you'll be in.<br/><br/>We've hired talented DJs who will create a great atmosphere with their sets. You can find the exact schedule in the attachment.<br/><br/>At 9 PM, there will be a round of Bingo with the Bingo Bros – feel free to join in. For those of you in festival mode: At the glitter station, you can add a little sparkle to yourselves.<br/><br/>Since we're in the midst of nature, we kindly ask you to be mindful of the environment and not to leave any trash behind. The respective rules can be <a href='https://www.schwerelos-berlin.com/gardenrules.jpg'>found here</a>.<br/><br/>There's no place for violence here. We do not tolerate any form of aggressive behavior. Those who can't adhere to this will be escorted off the premises.<br/><br/>We're really excited for your attendance!<br/><br/>Your Schwerelos Crew 🚀</div><br/><br/><img src='https://www.schwerelos-berlin.com/pathfinder.jpg' alt='pathfinder' width='100%'><img src='https://www.schwerelos-berlin.com/timetable.jpg' alt='timetable' width='100%'>",
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