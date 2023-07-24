import { makeObservable, observable, action } from "mobx";

export class ArtistStore {

  artists = [
    { name: 'MEEMA', bio: "", links: "" },
    { name: 'Lukas Edler', bio: "", links: { soundcloud: "https://soundcloud.com/stuntrising" } },
    { name: 'Johannes Hillmer', bio: "", links: "" },
    { name: 'b0ys_cry', bio: "", links: "" },
    { name: 'van Staen', bio: { en: '', de: '' }, links: { insta: '', ra: '', soundcloud: '', spotify: '' } }, 
    { name: 'Sommersonnenwende', bio: "", links: "" },
    { name: 'Nostique', bio: "", links: "" },
    { name: 'Missing DJ', bio: "", links: "" },
  ];


  constructor() {
    makeObservable(this, {
      artists: observable,
    });
  }
}

export const artistStore = new ArtistStore();
