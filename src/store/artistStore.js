import { makeObservable, observable, action } from "mobx";

export class ArtistStore {

  artists = [
    { name: 'b0ys_cry', 
      bio: {
        en: "Just here to love you. Don’t cry - b0ys_cry",
        de: '',
      }, 
      links: {
        insta: 'https://www.instagram.com/b0ys_cry/',
        soundcloud: "https://soundcloud.com/b0ys_cry",
        ra: 'https://ra.co/dj/b0ys_cry/',
      },
    },
    { name: 'van Staen', 
      bio: { 
        en: 'French electronic music producer, member of the electronic live act `Mira Lykke` & founder of the progressive House music label Purzelbaum Records. Making music under his eponym name since 2018. His style is rather melodic and progressive - from house to techno - with a clear focus on melodies.', 
        de: '',
      }, 
      links: { 
        insta: "https://www.instagram.com/vanstaenmusic/", 
        ra: 'https://ra.co/dj/vanstaen', 
        soundcloud: 'https://soundcloud.com/vanstaenmusic', 
        spotify: 'https://open.spotify.com/intl-de/artist/0dsj1Ni4YlrtmcySPpnrhp',
      } 
    }, 
    { name: 'Sommersonnenwende', 
      bio: {
        en: "2010 fing es für Sommersonnenwende mit dem Techno an. Seit dem laß man den Namen auf diversen Open Airs, in Berliner Clubs wie dem Sisyphos, Ritter Butzke, aboutBlank, Tresor und der Renate, sowie auf Festivals wie dem Forest Jump, Meeresrauschen, Feel und dem Mitdir Festival. Techno ist hier der Schlüssel um die Crowd zum tanzen zu bringen. Lasst Liebe da",
        de: "2010 fing es für Sommersonnenwende mit dem Techno an. Seit dem laß man den Namen auf diversen Open Airs, in Berliner Clubs wie dem Sisyphos, Ritter Butzke, aboutBlank, Tresor und der Renate, sowie auf Festivals wie dem Forest Jump, Meeresrauschen, Feel und dem Mitdir Festival. Techno ist hier der Schlüssel um die Crowd zum tanzen zu bringen. Lasst Liebe da",
      }, 
      links: {
        insta: 'https://www.instagram.com/sommersonnenwende.mp3/',
        soundcloud: 'https://soundcloud.com/sommersonnenwende',
        ra: 'https://ra.co/dj/sommersonnenwende',
      }
    },
    { name: 'Nostique', 
      bio: {
        en: "Nostique is a musical collaboration between two friends who have honed their skills in record spinning and music production. Their signature transitions into different genres and carefully curated selections are known to keep the a vibrant mood on the dance floor pulsing throughout the night. With roots in Berlin, Nostique has been drivin by the city's rich musical heritage and infuses each set with a pulsing and rousing spirit. The result is an immersive experience, paired with an intimate atmosphere that sets the mood for the night.",
        de: ""
      }, 
      links: {
        insta: "https://www.instagram.com/nostique/",
        soundcloud: "https://soundcloud.com/nostique",
        ra: "https://ra.co/dj/nostique",
        spotify: "https://open.spotify.com/intl-de/artist/6yg9pBGVn2EqJRQWC4yd9h",
      }, 
    },
    { name: 'Missing DJ', 
      bio: { 
        en: "MissingDJ shazamt sich seit über 10 Jahren durch die Berliner Clublandschaft. Ein wilder, melodischer, elektronischer Mix aus allem was gefällt. Von prolligem Tech-House über vocal-lastiges Gedudel bis hin zu feingeistigem Dub-Techno wird alles in einen Pott geschmissen und kräftig durchgerührt. Heraus kommt ein überraschend schmackhafter Eintopf, den man nicht missen sollte.",
        de: "MissingDJ shazamt sich seit über 10 Jahren durch die Berliner Clublandschaft. Ein wilder, melodischer, elektronischer Mix aus allem was gefällt. Von prolligem Tech-House über vocal-lastiges Gedudel bis hin zu feingeistigem Dub-Techno wird alles in einen Pott geschmissen und kräftig durchgerührt. Heraus kommt ein überraschend schmackhafter Eintopf, den man nicht missen sollte.",
      }, 
      links: {
        soundcloud: "https://soundcloud.com/missingdj",
      }, 
    },
    { name: 'MEEMA', 
      bio: {
        en: 'Meema, born and raised in Berlin, with electronic music as an early discovered passion. She thrives driven by bass and melodies. At some point she wanted to share this love with others, thus she decided to stand behind the DJ Booth to bring her own sound to all the lovely dancers.',
        de: '',
        }, 
      links: {
        insta: "https://www.instagram.com/nur_meema/",
        soundcloud: "https://soundcloud.com/meema_bln",
        ra: 'https://ra.co/dj/meema'
      }, 
    },    
    { name: 'Lukas Edler', 
      bio: "", 
      links: { 
        insta: 'https://www.instagram.com/edler_lukas',
        soundcloud: "https://soundcloud.com/stuntrising",
        ra: "https://ra.co/dj/lukasedler/",
        spotify: "https://open.spotify.com/intl-de/artist/2dwAYsbgtuGbOF8LkZRl28",
      }, 
    },    
    { name: 'Johannes Hillmer', 
      bio: {
        en: 'Johannes startet spinning vinyls back in 2012 and together with the new founded schwerelos project he stepped into the Berlin club scene. Over the years he developed a love for dub and groovy Techno which you can find in his sets and own productions.',
        de: '',
      }, 
      links: {
        soudncloud: "https://soundcloud.com/joh-2",
        spotify: "https://open.spotify.com/intl-de/artist/6JJOiYhD2HuO9lxMKbCM1g",
      },
    },
  ];


  constructor() {
    makeObservable(this, {
      artists: observable,
    });
  }
}

export const artistStore = new ArtistStore();
