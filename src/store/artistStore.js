import { makeObservable, observable } from "mobx";

export class ArtistStore {

  artists = [
    { name: 'b0ys_cry', bio: "", pics: "", links: "" },
    { name: 'Johannes Hillmer', bio: "", pics: "", links: "" },
    { name: 'MEEMA', bio: "", pics: "", links: "" },
    { name: 'Nostique', bio: "", pics: "", links: "" },
    { name: 'Sommersonnenwende', bio: "", pics: "", links: "" },
    { name: 'van Staen', bio: { en: '', de: '' }, pics: { small: '', big: '' }, links: { insta: '', ra: '', soundcloud: '', spotify: '' } },
  ];

  constructor() {
    makeObservable(this, {
      artists: observable,
    });
  }
}

export const artistStore = new ArtistStore();
