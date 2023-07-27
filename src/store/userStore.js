import { makeObservable, observable, action } from "mobx";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class UserStore {

  isAdmin = cookies.get('isAdmin');

  constructor() {
    makeObservable(this, {
      isAdmin: observable,
      setIsAdmin: action,
    });
  }

  setIsAdmin = (isAdmin) => {
    this.isAdmin = isAdmin;
    if (isAdmin) {
      cookies.set('isAdmin', isAdmin, { path: '/' });
    } else {
      cookies.remove('isAdmin', { path: '/' });
    }
  };

}

export const userStore = new UserStore();
