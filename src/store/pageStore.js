import { makeObservable, observable, action } from "mobx";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class PageStore {

  selectedArtistId = 0;
  hideSwipe = cookies.get('hideSwipe') || false;
  hideSwipeArtist = cookies.get('hideSwipeArtist') || false;

  constructor() {
    makeObservable(this, {
      selectedArtistId: observable,
      setSelectedArtistId: action,
      hideSwipe: observable,
      setHideSwipe: action,
      hideSwipeArtist: observable,
      setHideSwipeArtist: action,
    });
  }

  setSelectedArtistId = (selectedArtistId) => {
    this.selectedArtistId = selectedArtistId;
  };

  setHideSwipe = (hideSwipe) => {
    this.hideSwipe = hideSwipe;
    if (hideSwipe === true) {
      cookies.set('hideSwipe', hideSwipe, { path: '/' });
    }
  };

  setHideSwipeArtist = (hideSwipeArtist) => {
    this.hideSwipeArtist = hideSwipeArtist;
    if (hideSwipeArtist === true) {
      cookies.set('hideSwipeArtist', hideSwipeArtist, { path: '/' });
    }
  };

}

export const pageStore = new PageStore();
