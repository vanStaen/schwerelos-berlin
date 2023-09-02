
const axios = require("axios");
const emails = ["Claudio.Martay@googlemail.com", "Annaseifert18@gmail.com", "Vincent.wiens@web.de", "devranbasbolat@gmail.com", "chromoxyd@live.de", "Johanna.moraru@gmail.com", "joyraduenz@gmail.com", "Siedlaczek.maria@gmail.com", "Dov.selby@gmail.com", "sigjames@gmx.de", "sigjamesone@gmail.com", "patrick.pogrzeba@googlemail.com", "theres.gebhardt@web.de", "anne2892@gmx.net", "Marcus.szubiak@gmail.com", "Miminique@outlook.de", "hi@fabianburghardt.de", "alexandra-k89@web.de", "Christina.moeser@posteo.de", "Konstantin.schroder@yahoo.de", "johannes.eising@hotmail.de", "Simon.dopf@outlook.de", "waldy4545@googlemail.com", "Johannes.weyers@gmail.com", "leoquigley98@gmail.com", "mathias_wendlandt@hotmail.com", "josephin_bach@gmx.de", "skoko.ivona@gmail.com", "leyla.discacciati@gmx.net", "christian.voss@posteo.de", "Maria.fechner@yahoo.de", "skay@crofts.film", "thielemann.elisa@gmail.com", "nathalie_voelker@yahoo.de", "Kazukimiau@hotmail.com", "lanadebus@gmail.com", "schwerelos@prvcy.re", "feeling-so-real@web.de", "Angelina-taegtow@gmx.net", "josiexd@gmx.de", "Henningkirchner96@gmail.com", "philippjulian@gmx.de", "Tonyheller97@cloud.com", "manja.ffo@hotmail.de", "manja.bennewitz@web.de", "Leonkottke@web.de", "trageserpatricia95@gmail.com", "elisabethp@unitybox.de", "Batspirale@gmail.com", "Maxwegener88@gmail.com", "Sebastian_riebel@yahoo.de", "Netflixabcremen@gmx.net", "D.jacobson@gmx.net", "sarah.kerner@gmx.de", "kira.fahlbusch@googlemail.com", "Lilli_m.lawin@web.de", "franzihoffmann1703@gmail.com", "slubdr@web.de", "Ewanpalmer3@gmail.con", "Nickilajade@gmail.com", "luisgottlieb@gmail.com", "Noraluna89@gmail.com", "Martinkristiina@gmail.com", "f.navrath@gmx.de", "jeantiha@gmail.com", "Manustaerk0808@gmail.com", "lari.misch@gmail.com", "silviocasanova@icloud.com", "marietrudak@hotmail.com", "hilamax@hotmail.com", "bilze99@gmail.com", "Stefanie.winter1991@gmx.de", "Melissa-grossmann@gmx.de", "Chadournepaul64@gmail.com", "berlinchen@posteo.net", "D.rau+schwerelos@mailbox.org", "pgeres91@googlemail.com", "igorsmadja428@gmail.com", "susanna.wbr@gmail.com", "marion.a.kunz@gmail.com", "s.haimerl@kabelmail.de", "ericthomas201@gmail.com", "Lukasthoben@web.de", "T.fiechtner@gmx.de", "christine.zimmer@gmx.eu", "Emmabieler.2003@icloud.com", "Gerlach.julian@web.de", "Hoppicheck@gmx.de", "Robert.peukert@gmail.com", "Eva.behnke@gmail.com", "Xzitronenfalterchenx@gmail.com", "paul.wildner@gmx.de", "lilly.marie.schmidt@outlook.de", "Inesdnallo@gmail.com", "maloyamaloti@gmail.com", "patrick.richter_contact@yahoo.de", "nadja.oserow@web.de", "hoppipolla@gmx.net", "johannes-kehren@gmx.de", "johanneskehren89@gmail.com", "Dustin521@gmx.de", "thiel.saskia@yahoo.de", "c.d.rzehak@gmail.com", "tillmannloth@googlemail.com", "claudia.marchese@me.com", "henry1tannert@gmail.com", "lika_kaatz@live.de", "Dezent1306@gmail.com", "mail@ricardafroehlich.de", "ns@htonl.de", "eulestephie@gmx.net", "suffer-for-nothing@web.de", "Amelie.knobeler@web.de", "jodide-stopps0p@icloud.com", "Lilli_m.lawin@web.de", "Lilli_m.lawin@web.de", "trikomabodypiercing@gmail.com", "gabi.avereigh@moosbay.com", "louisms@gmx.de", "stephanie.schmidt@onlinehome.de", "Onlyillusions@web.de", "samu.bapo@gmail.com", "Lumametwally@gmail.com", "grahlmann.c@gmail.com", "philipp.platzeck@gmail.com", "dr.octopus@web.de", "aaronschulz@msn.com", "conrado5@gmx.de", "lindasch3000@gmail.ru", "jasmin.heindorff@live.com", "franziska.shz@outlook.de", "Johanna.Zenichowski@gmail.com","clement.vanstaen@gmail.com"];

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