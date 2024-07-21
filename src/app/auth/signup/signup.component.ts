import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/classes/utilisateur';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  utilisateur = {} as Utilisateur;
}
