import { makeObservable, observable } from "mobx";

export class ArtistStore {

  artistNames = [
    null,
    'b0ys_cry',
    'Johannes Hillmer',
    'MEEMA',
    'Nostique',
    'Sommersonnenwende',
    'van Staen'
  ];
  artistBios = [
    null,
    {},
    {},
    {},
    {},
    {},
    { en: '', de: '' },
  ];
  artistPics = [
    null,
    {},
    {},
    {},
    {},
    {},
    { small: '', big: '' },
  ];
  artistLinks = [
    null,
    {},
    {},
    {},
    {},
    {},
    { insta: '', ra: '', soundcloud: '', spotify: '' },
  ];

  constructor() {
    makeObservable(this, {
      artistNames: observable,
      artistPics: observable,
      artistBios: observable,
      artistLinks: observable,
    });
  }
}

export const artistStore = new ArtistStore();
