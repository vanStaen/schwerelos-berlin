import { makeObservable, observable } from "mobx";

export class GigStore {

  gigs = [   
    { date: '18.03.2023', 
      location: "Schokoladen", 
      name: "Auf 1,2,3,.. Bier mit Schwerelos", 
      raEventNumber: "1670920" }, 
    { date: '21.04.2023', 
      location: "Birgit&Bier", 
      name: "Birgits Weekender", 
      raEventNumber: "1666734" },
    { date: '01.05.2023', 
      location: "Suicide Club", 
      name: "Techno Türken 1Mai Openair",
      raEventNumber: "1690715" },
    { date: '19.05.2023', 
      location: "Rödrisch", 
      name: "Schwerelos meets female:pressure",
      raEventNumber: "1679609" },
    { date: '02.06.2023', 
      location: "Birgit&Bier", 
      name: "Birgits Weekender", 
      raEventNumber: "1702920" },
    { date: '17.06.2023', 
      location: "Schokoladen", 
      name: "Schwerelos meets Cetama", 
      raEventNumber: "1702931" },
    { date: '15.07.2023', 
      location: "Rödrisch", 
      name: "Schwerelos meets friends", 
      raEventNumber: "1718919" },
    { date: '25.08.2023', 
      location: "Schokoladen", 
      name: "`Waving the gun` afterparty", 
      raEventNumber: "1741681" },
    { date: '02.09.2023', 
      location: "Secret location", 
      name: "Schwerelos sommer's openair", 
      raEventNumber: "1724976" },
    { date: '21.09.2023', 
      location: "Renate", 
      name: "Hummmpday x Schwerelos",
      raEventNumber: "1706073" },
  ];

  constructor() {
    makeObservable(this, {
      gigs: observable,
    });
  }
}

export const gigStore = new GigStore();
