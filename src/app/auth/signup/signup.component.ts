import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/classes/utilisateur';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  utilisateur = {} as Utilisateur;
  constructor(private serviceUser: UserService) {
    //Injection de la dependance
  }
  addOne() {
    this.serviceUser.addOneUser(this.utilisateur);
    this.utilisateur = {} as Utilisateur;
  }
}
