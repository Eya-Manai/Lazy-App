import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/classes/utilisateur';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  utilisateur = {} as Utilisateur;
}
