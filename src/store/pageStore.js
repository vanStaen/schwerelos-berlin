import { makeObservable, observable, action } from "mobx";

export class PageStore {

  selectedArtistId = null;  
  language = navigator.language || navigator.userLanguage;

  constructor() {
    makeObservable(this, {
      selectedArtistId: observable,
      setSelectedArtistId: action,
      language: observable,
      setLanguage: action,
    });
  }

  setSelectedArtistId = (selectedArtistId) => {
    this.selectedArtistId = selectedArtistId;
  };

  setLanguage = (language) => {
    this.language = language;
  };

}

export const pageStore = new PageStore();
