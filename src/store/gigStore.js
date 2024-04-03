import { makeObservable, observable } from "mobx";

export class GigStore {

  gigs = [
    {
      date: '2012-06-22',
      location: "Bi Nuu",
      name: "Schwerelos im Bi Nuu",
      raEventNumber: null,
      link: null,
    },
    {
      date: '2012-07-13',
      location: "Festsaal Kreuzberg",
      name: "Schwerelos im Festsaal",
      raEventNumber: null,
      link: null,
    },
    {
      date: '2012-07-28',
      location: "Tempelhofer Feld",
      name: "Schwerelos OpenAir",
      raEventNumber: null
    },
    {
      date: '2012-09-08',
      location: "Rosis",
      name: "Schwerelos im Rosis",
      raEventNumber: null
    },
    {
      date: '2012-10-26',
      location: "Astra Kulturhaus",
      name: "Schwerelos showcase",
      raEventNumber: null
    },
    {
      date: '2012-12-29',
      location: "Rosis",
      name: "Schwerelos im Rosis",
      raEventNumber: null
    },
    {
      date: '2013-02-12',
      location: "Magdalena",
      name: "Schwerelos Labelnight",
      raEventNumber: null
    },
    {
      date: '2013-04-13',
      location: "Arena Club",
      name: "Schwerelos 2 Jahre",
      raEventNumber: null
    },
    {
      date: '2013-06-08',
      location: "Rosis",
      name: "Schwerelos Labelnight",
      raEventNumber: null
    },
    {
      date: '2013-10-11',
      location: "Rosis",
      name: "Schwerelos /w Toni Haupt",
      raEventNumber: null
    },
    {
      date: '2013-11-23',
      location: "Arena Club",
      name: "Schwerelos /w Jens Bond",
      raEventNumber: null
    },
    {
      date: '2014-01-18',
      location: "Arena Club",
      name: "Schwerelos /w Rampue",
      raEventNumber: null
    },
    {
      date: '2014-09-03',
      location: "Rosis",
      name: "Schwerelos im Rosis",
      raEventNumber: null
    },
    {
      date: '2015-01-17',
      location: "Gretchen Club",
      name: "Schwerelos im Gretchen",
      raEventNumber: "665926"
    },
    {
      date: '2015-03-06',
      location: "Rosis",
      name: "Schwerelos im Rosis",
      raEventNumber: null
    },
    {
      date: '2015-04-05',
      location: "Rosis",
      name: "Schwerelos Osterfest",
      raEventNumber: "695399"
    },
    {
      date: '2015-04-11',
      location: "Hasenheide",
      name: "Schwerelos im Freien",
      raEventNumber: null
    },
    {
      date: '2015-07-24',
      location: "Loftus Hall",
      name: "Schwerelos /w Mira Lykke",
      raEventNumber: "733574"
    },
    {
      date: '2015-07-13',
      location: "Wulheide",
      name: "Schwerelos Openair",
      raEventNumber: null
    },
    {
      date: '2015-10-23',
      location: "Loftus Hall",
      name: "Schwerelos im Loftus Hall",
      raEventNumber: null
    },
    {
      date: '2015-11-14',
      location: "Weekend Club",
      name: "Schwerelos Labelnight",
      raEventNumber: null
    },
    {
      date: '2015-11-28',
      location: "Rosis",
      name: "Schwerelos im Rosis",
      raEventNumber: null
    },
    {
      date: '2016-01-02',
      location: "Burg Schnabel",
      name: "Schwerelos showcastle",
      raEventNumber: null
    },
    {
      date: '2016-03-11',
      location: "Weekend Club",
      name: "Schwerelos Labelnight",
      raEventNumber: null
    },
    {
      date: '2016-10-06',
      location: "Weekend Club",
      name: "Schwerelos x Love on Top",
      raEventNumber: null
    },
    {
      date: '2017-01-07',
      location: "Weekend Club",
      name: "Schwerelos Labelnight",
      raEventNumber: null
    },
    {
      date: '2018-07-14',
      location: "Polygon Berlin",
      name: "Schwerelos Wonderland Summer OpenAir",
      raEventNumber: null
    },
    {
      date: '2023-03-18',
      location: "Schokoladen",
      name: "Auf 1,2,3... Bier mit Schwerelos",
      raEventNumber: "1670920"
    },
    {
      date: '2023-04-21',
      location: "Birgit&Bier",
      name: "Birgits Weekender",
      raEventNumber: "1666734"
    },
    {
      date: '2023-05-01',
      location: "Suicide Club",
      name: "Techno Türken 1Mai Openair",
      raEventNumber: "1690715"
    },
    {
      date: '2023-05-19',
      location: "Rodrisch",
      name: "Schwerelos meets female:pressure",
      raEventNumber: "1679609"
    },
    {
      date: '2023-06-02',
      location: "Birgit&Bier",
      name: "Birgits Weekender",
      raEventNumber: "1702920"
    },
    {
      date: '2023-06-17',
      location: "Schokoladen",
      name: "Schwerelos meets Cetama",
      raEventNumber: "1702931"
    },
    {
      date: '2023-07-15',
      location: "Rodrisch",
      name: "Schwerelos meets friends",
      raEventNumber: "1718919"
    },
    {
      date: '2023-08-25',
      location: "Schokoladen",
      name: "`Waving the gun` afterparty",
      raEventNumber: "1741681"
    },
    {
      date: '2023-09-02',
      location: "Secret location",
      name: "Schwerelos soli openair",
      raEventNumber: "1724976"
    },
    {
      date: '2023-09-21',
      location: "Renate",
      name: "Hummmpday x Schwerelos",
      raEventNumber: "1706073"
    },
    {
      date: '2023-08-05',
      location: "Schokoladen",
      name: "Schwerelos afterparty",
      raEventNumber: null
    },
    {
      date: '2023-08-11',
      location: "Openair (tba)",
      name: "Schwerelos OpenAir",
      raEventNumber: null
    },
    {
      date: '2023-08-19',
      location: "Rodrisch",
      name: "Schwerelos meets friends",
      raEventNumber: null
    },
    {
      date: '2023-08-26',
      location: "Forest Jump Festival",
      name: "Schwerelos @ForestJump",
      raEventNumber: null,
      link: 'https://forestjump-festival.de/lineup/',
    },
    {
      date: '2023-09-30',
      location: "AVA Club",
      name: "Klubnacht with Red Moon Label",
      raEventNumber: "1759907",
    },
    {
      date: '2023-10-06',
      location: "Dream Baby Dream",
      name: "Schwerelos night",
      raEventNumber: "1779019",
    },
    {
      date: '2023-10-13',
      location: "Void",
      name: "Excite, with MEEMA",
      raEventNumber: "1772337",
    },
    {
      date: '2023-10-14',
      location: "Kultukompost",
      name: "With Sommersonnenwende / Missing DJ",
      raEventNumber: null,
    },
    {
      date: '2023-10-14',
      location: "Mensch Meier",
      name: "3000 grad, with MEEMA",
      raEventNumber: "1782441",
    },
    {
      date: '2023-12-20',
      location: "AVA Club",
      name: "Techno Mittwoch",
      raEventNumber: "1792274",
    },
    {
      date: '2024-01-11',
      location: "Renate",
      name: "Disco Futurtismo x Schwerelos",
      raEventNumber: "1828426",
    },
    {
      date: '2024-01-21',
      location: "Zur Klappe",
      name: "State of Confusion vol.001",
      raEventNumber: "1832531",
    },
    {
      date: '2024-03-15',
      location: "AVA Club",
      name: "Klubnacht (Tom 🎂)",
      raEventNumber: "1792274",
    },
    {
      date: '2024-03-28',
      location: "Schokoladen",
      name: "Schwerelos Confusion",
      raEventNumber: "1872466",
    },
    {
      date: '2024-04-01',
      location: "Hasenheide",
      name: "Schwerelos OpenAir",
    },
    {
      date: '2024-04-12',
      location: "Void CLub",
      name: "Schwerelos OpenAir",
      raEventNumber: "1885696",
    },
    {
      date: '2024-05-01',
      location: "tba",
      name: "1.Mai OpenAir",
      raEventNumber: "1896354",
    },
    {
      date: '2024-05-01',
      location: "AVA Club",
      name: "Techno Mittwoch 1.Mai Edition",
      raEventNumber: "1849087",
    },
    {
      date: '2024-05-09',
      location: "tba",
      name: "Schwerelos OpenAir",
    },
  ];

  constructor() {
    makeObservable(this, {
      gigs: observable,
    });
  }
}

export const gigStore = new GigStore();
