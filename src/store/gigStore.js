import { makeObservable, observable } from "mobx";

export class GigStore {

  gigs = [
    { date: '15.07', 
      location: "Rödrisch", 
      name: "SCHWERELOS meets FRIENDS", 
      raEventNumber: "1718919" },
    { date: '02.09', 
      location: "Open Air", 
      name: "SCHWERELOS sommers end open airs", 
      raEventNumber: "1724976" },
    { date: '21.09', 
      location: "Renate", 
      name: "Hummmpday x SCHWERELOS",
      raEventNumber: "1706073" },
  ];

  constructor() {
    makeObservable(this, {
      gigs: observable,
    });
  }
}

export const gigStore = new GigStore();
