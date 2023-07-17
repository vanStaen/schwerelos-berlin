import { makeObservable, observable, action } from "mobx";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class PageStore {

  selectedArtistId = null;  
  language = navigator.language || navigator.userLanguage;
  //showSwipe = cookies.get('showSwipe');
  showSwipe = true;

  constructor() {
    makeObservable(this, {
      selectedArtistId: observable,
      setSelectedArtistId: action,
      language: observable,
      setLanguage: action,
      showSwipe: observable,
      setShowSwipe: action,
    });
  }

  setSelectedArtistId = (selectedArtistId) => {
    this.selectedArtistId = selectedArtistId;
  };

  setLanguage = (language) => {
    this.language = language;
  };

  setShowSwipe = (showSwipe) => {
    this.showSwipe = showSwipe;
    if (showSwipe === false) {
      //cookies.set('showSwipe', showSwipe, { path: '/' });
    }
  };

}

export const pageStore = new PageStore();
