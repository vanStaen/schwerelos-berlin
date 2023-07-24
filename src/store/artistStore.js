import { makeObservable, observable, action } from "mobx";

export class ArtistStore {

  artists = [
    { name: 'MEEMA', bio: "", links: "" },
    { name: 'Lukas Edler', bio: "", links: { soundcloud: "https://soundcloud.com/stuntrising" } },
    { name: 'Johannes Hillmer', bio: "", links: "" },
    { name: 'b0ys_cry', bio: "", links: "" },
    { name: 'van Staen', 
      bio: { 
        en: 'French electronic music producer, member of the electronic live act `Mira Lykke` & founder of the progressive House music label Purzelbaum Records. Making music under his eponym since 2018. His style is rather melodic and progressive - from house to techno - with a clear focus on melodies.', 
        de: '' }, 
      links: { insta: '', ra: '', soundcloud: '', spotify: '' } 
    }, 
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
