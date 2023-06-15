import { makeObservable, observable } from "mobx";

export class ArtistStore {
 
  artistNames = [
    'b0ys_cry',
    'Johannes Hillmer', 
    'MEEMA', 
    'Nostique', 
    'Sommersonnenwende', 
    'van Staen'
  ];  
  artistBios = [
    {},
    {},
    {},
    {},
    {},
    {en: '', de: ''},  
  ];
  artistPics = [
    {},
    {},
    {},
    {},
    {},
    {small: '', big: ''},  
  ];
  artistLinks = [
    {},
    {},
    {},
    {},
    {},
    {insta: '', ra: '', soundcloud: '', spotify: ''},         
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
