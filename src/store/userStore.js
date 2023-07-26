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
    cookies.set('isAdmin', isAdmin);
  };

}

export const userStore = new UserStore();
