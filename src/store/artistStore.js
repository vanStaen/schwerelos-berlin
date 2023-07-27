import { makeObservable, observable, action } from "mobx";

export class ArtistStore {

  artists = [
    { name: 'b0ys_cry', bio: "", links: "" },
    { name: 'van Staen', 
      bio: { 
        en: 'French electronic music producer, member of the electronic live act `Mira Lykke` & founder of the progressive House music label Purzelbaum Records. Making music under his eponym name since 2018. His style is rather melodic and progressive - from house to techno - with a clear focus on melodies.', 
        de: '' 
      }, 
      links: { insta: '', ra: '', soundcloud: '', spotify: '' } 
    }, 
    { name: 'Sommersonnenwende', bio: "", links: "" },
    { name: 'Nostique', bio: "", links: "" },
    { name: 'Missing DJ', 
      bio: { 
        en: "MissingDJ shazamt sich seit über 10 Jahren durch die Berliner Clublandschaft. Ein wilder, melodischer, elektronischer Mix aus allem was gefällt. Von prolligem Tech-House über vocal-lastiges Gedudel bis hin zu feingeistigem Dub-Techno wird alles in einen Pott geschmissen und kräftig durchgerührt. Heraus kommt ein überraschend schmackhafter Eintopf, den man nicht missen sollte.",
        de: "MissingDJ shazamt sich seit über 10 Jahren durch die Berliner Clublandschaft. Ein wilder, melodischer, elektronischer Mix aus allem was gefällt. Von prolligem Tech-House über vocal-lastiges Gedudel bis hin zu feingeistigem Dub-Techno wird alles in einen Pott geschmissen und kräftig durchgerührt. Heraus kommt ein überraschend schmackhafter Eintopf, den man nicht missen sollte."
      }, 
      links: "" },
    { name: 'MEEMA', bio: "", links: "" },    
    { name: 'Lukas Edler', bio: "", links: { soundcloud: "https://soundcloud.com/stuntrising" } },    
    { name: 'Johannes Hillmer', bio: "", links: "" },
  ];


  constructor() {
    makeObservable(this, {
      artists: observable,
    });
  }
}

export const artistStore = new ArtistStore();
