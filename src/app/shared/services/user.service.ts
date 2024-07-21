import { Injectable } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Utilisateur[] = [];
  currentUser = {} as Utilisateur;

  constructor() {}
  addOneUser(user: Utilisateur) {
    this.users.push(user);
    console.log('Ajouté', user);
  }

  getCurrentUser(id: number) {
    return this.users[id];
  }

  login(email: string, password: string) {
    let us = this.users.filter((user) => {
      user.email == email && user.password == password;
    });
    if (us != null) {
      let indice = this.users.indexOf(us[0]);
      this.currentUser = this.users[indice];
      return true;
    }
    return false;
  }

  deleteCurrentUser(id: number) {
    this.users.splice(id, 1);
  }
}
