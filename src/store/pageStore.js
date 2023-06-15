import { makeObservable, observable, action } from "mobx";

export class PageStore {

  selectedArtistId = null;

  constructor() {
    makeObservable(this, {
      selectedArtistId: observable,
      setSelectedArtistId: observable,
    });
  }

  setSelectedArtistId = (selectedArtistId) => {
    this.selectedArtistId = selectedArtistId;
  };

}

export const pageStore = new PageStore();
