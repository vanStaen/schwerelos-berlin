import { makeObservable, observable } from "mobx";

export class GigStore {

  gigs = [
    { date: '15.07', 
      location: "Rödrisch", 
      name: "Schwerelos meets friends", 
      raEventNumber: "1718919" },
    { date: '25.08', 
      location: "Schokoladen", 
      name: "`Waving the gun` afterparty", 
      raEventNumber: "1741681" },
    { date: '02.09', 
      location: "Secret location", 
      name: "Schwerelos sommer's openair", 
      raEventNumber: "1724976" },
    { date: '21.09', 
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
