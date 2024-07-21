import { Injectable } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//injectable means appel de l'instance sans new et dans les paramètres du constructeur
export class UserService {
  users: Utilisateur[] = [];
  currentUser = {} as any;

  constructor() {}
  addOneUser(user: Utilisateur) {
    this.users.push(user);
    console.log('Ajouté', user);
    console.table(this.users);
    return user;
  }

  getCurrentUser(id: number) {
    return this.users[id];
  }

  login(email: string, password: string) {
    this.users.forEach((user) => {
      if (user.email == email && user.password == password) {
        this.currentUser = user;
        return true;
      } else {
        return false;
      }
    });
  }

  deleteCurrentUser(id: number) {
    this.users.splice(id, 1);
    console.log('User', this.currentUser);
  }

  getAllUsers() {
    console.table(this.users);
    return this.users;
  }
}
