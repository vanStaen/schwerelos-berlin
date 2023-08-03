import { makeObservable, observable, action } from "mobx";

export class ArtistStore {

  artists = [
    { name: 'b0ys_cry', 
      bio: {
        en: "Just here to love you. Don’t cry!",
        de: 'Nur hier, um dich zu lieben. Nicht weinen!',
      }, 
      links: {
        Instagram: 'https://www.instagram.com/b0ys_cry/',
        Soundcloud: "https://soundcloud.com/b0ys_cry",
        ResidentAdvisor: 'https://ra.co/dj/b0ys_cry/',
      },
    },
    { name: 'van Staen', 
      bio: { 
        en: 'French electronic music producer, member of the electronic live act `Mira Lykke` & founder of the progressive House music label Purzelbaum Records. Making music under his eponym name since 2018. His style is rather melodic and progressive - from house to techno - with a clear focus on melodies.', 
        de: 'Ein französischer elektronischer Musikproduzent, Mitglied des elektronischen Live-Acts "Mira Lykke" & Gründer des Progressive House-Musiklabels "Purzelbaum Records". Seit 2018 produziert er Musik unter seinem Eponym. Sein Stil ist melodisch und progressiv - von House bis Techno - mit einem klaren Fokus auf Melodien.',
      }, 
      links: { 
        Instagram: "https://www.instagram.com/vanstaenmusic/", 
        ResidentAdvisor: 'https://ra.co/dj/vanstaen', 
        Soundcloud: 'https://soundcloud.com/vanstaenmusic', 
        spotify: 'https://open.spotify.com/intl-de/artist/0dsj1Ni4YlrtmcySPpnrhp',
      } 
    }, 
    { name: 'Sommersonnenwende', 
      bio: {
        en: "In 2010, it all started for Sommersonnenwende with Techno. Since then, the name has been seen at various open-air events, in Berlin clubs such as Sisyphos, Ritter Butzke, aboutBlank, Tresor, and Renate, as well as at festivals like Forest Jump, Meeresrauschen, Feel, and Mitdir Festival. Techno is the key here to get the crowd dancing. Spread love around.",
        de: "2010 fing es für Sommersonnenwende mit dem Techno an. Seit dem laß man den Namen auf diversen Open Airs, in Berliner Clubs wie dem Sisyphos, Ritter Butzke, aboutBlank, Tresor und der Renate, sowie auf Festivals wie dem Forest Jump, Meeresrauschen, Feel und dem Mitdir Festival. Techno ist hier der Schlüssel um die Crowd zum tanzen zu bringen. Lasst Liebe da.",
      }, 
      links: {
        Instagram: 'https://www.instagram.com/sommersonnenwende.mp3/',
        Soundcloud: 'https://soundcloud.com/sommersonnenwende',
        ResidentAdvisor: 'https://ra.co/dj/sommersonnenwende',
      }
    },
    { name: 'Nostique', 
      bio: {
        en: "Nostique is a musical collaboration between two friends who have honed their skills in record spinning and music production. Their signature transitions into different genres and carefully curated selections are known to keep the a vibrant mood on the dance floor pulsing throughout the night. With roots in Berlin, Nostique has been drivin by the city's rich musical heritage and infuses each set with a pulsing and rousing spirit. The result is an immersive experience, paired with an intimate atmosphere that sets the mood for the night.",
        de: "Nostique ist eine musikalische Kollaboration zwischen zwei Freunden, die ihre Fähigkeiten im Plattenauflegen und der Musikproduktion verfeinert haben. Ihre sorgfältig ausgewählten Tracks und charakteristischen Übergänge zwischen verschiedenen Genres sind bekannt dafür, eine lebendige Stimmung auf der Tanzfläche zu erzeugen, die die ganze Nacht lang pulsiert. Mit Wurzeln in Berlin wird Nostique von dem reichen musikalischen Erbe der Stadt angetrieben. Das Ergebnis ist ein fesselndes Erlebnis, eine intime Atmosphäre, die die Stimmung für die Nacht formt."
      }, 
      links: {
        Instagram: "https://www.instagram.com/nostique/",
        Soundcloud: "https://soundcloud.com/nostique",
        ResidentAdvisor: "https://ra.co/dj/nostique",
        Spotify: "https://open.spotify.com/intl-de/artist/6yg9pBGVn2EqJRQWC4yd9h",
      }, 
    },
    { name: 'Missing DJ', 
      bio: { 
        en: "For over 10 years MissingDJ has been shazaming his way through the Berlin club scene. A wild, melodic, electronic mix of everything that pleases. From brash tech-house to vocally-driven tunes and even delicate dub-techno, everything is thrown into the pot and stirred vigorously. The result is a surprisingly flavorful stew that shouldn't be missed.",
        de: "MissingDJ shazamt sich seit über 10 Jahren durch die Berliner Clublandschaft. Ein wilder, melodischer, elektronischer Mix aus allem was gefällt. Von prolligem Tech-House über vocal-lastiges Gedudel bis hin zu feingeistigem Dub-Techno wird alles in einen Pott geschmissen und kräftig durchgerührt. Heraus kommt ein überraschend schmackhafter Eintopf, den man nicht missen sollte.",
      }, 
      links: {
        Soundcloud: "https://soundcloud.com/missingdj",
      }, 
    },
    { name: 'MEEMA', 
      bio: {
        en: 'Meema, born and raised in Berlin, with electronic music as an early discovered passion. She thrives driven by bass and melodies. At some point she wanted to share this love with others, thus she decided to stand behind the DJ Booth to bring her own sound to all the lovely dancers.',
        de: 'Meema, geboren und aufgewachsen in Berlin, entdeckte früh ihre Leidenschaft für elektronische Musik. Von Bässen und Melodien angetrieben, blüht sie auf. Irgendwann entschied sie sich, diese Liebe mit anderen zu teilen und beschloss, hinter dem DJ-Pult zu stehen, um ihren eigenen Sound allen wundervollen Tänzern zu präsentieren.',
        }, 
      links: {
        Instagram: "https://www.instagram.com/nur_meema/",
        Soundcloud: "https://soundcloud.com/meema_bln",
        ResidentAdvisor: 'https://ra.co/dj/meema'
      }, 
    },    
    { name: 'Lukas Edler', 
      bio:  {
        en: 'tba',
        de: 'tba',
        },
      links: { 
        Instagram: 'https://www.instagram.com/edler_lukas',
        Soundcloud: "https://soundcloud.com/stuntrising",
        ResidentAdvisor: "https://ra.co/dj/lukasedler/",
        Spotify: "https://open.spotify.com/intl-de/artist/2dwAYsbgtuGbOF8LkZRl28",
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
