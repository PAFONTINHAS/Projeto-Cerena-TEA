import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-comp',
  imports: [FontAwesomeModule],
  templateUrl: './footer-comp.html',
  styleUrl: './footer-comp.css',
})
export class FooterComp {
  facebook: IconDefinition = faFacebookF;
  instagram: IconDefinition = faInstagram;

  year: number = new Date().getFullYear();

}
