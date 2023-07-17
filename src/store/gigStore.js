import { makeObservable, observable } from "mobx";

export class GigStore {

  gigs = [   
    { date: '2023-03-18', 
      location: "Schokoladen", 
      name: "Auf 1,2,3,.. Bier mit Schwerelos", 
      raEventNumber: "1670920" }, 
    { date: '2023-04-21', 
      location: "Birgit&Bier", 
      name: "Birgits Weekender", 
      raEventNumber: "1666734" },
    { date: '2023-05-01', 
      location: "Suicide Club", 
      name: "Techno Türken 1Mai Openair",
      raEventNumber: "1690715" },
    { date: '2023-05-19', 
      location: "Rödrisch", 
      name: "Schwerelos meets female:pressure",
      raEventNumber: "1679609" },
    { date: '2023-06-02', 
      location: "Birgit&Bier", 
      name: "Birgits Weekender", 
      raEventNumber: "1702920" },
    { date: '2023-06-17', 
      location: "Schokoladen", 
      name: "Schwerelos meets Cetama", 
      raEventNumber: "1702931" },
    { date: '2023-07-15', 
      location: "Rödrisch", 
      name: "Schwerelos meets friends", 
      raEventNumber: "1718919" },
    { date: '2023-08-25', 
      location: "Schokoladen", 
      name: "`Waving the gun` afterparty", 
      raEventNumber: "1741681" },
    { date: '2023-09-02', 
      location: "Secret location", 
      name: "Schwerelos sommer's openair", 
      raEventNumber: "1724976" },
    { date: '2023-09-21', 
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
