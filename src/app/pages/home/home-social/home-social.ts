import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-social',
  imports: [FontAwesomeModule],
  templateUrl: './home-social.html',
  styleUrl: './home-social.css',
})
export class HomeSocial {
  facebook: IconDefinition = faFacebookF;
  instagram: IconDefinition = faInstagram;

  redirectToSocial(link:string){
    window.open(link, '_blank');
  }


}
