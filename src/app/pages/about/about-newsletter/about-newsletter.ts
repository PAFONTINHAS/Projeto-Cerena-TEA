import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../../core/services/email-service/email-service';

@Component({
  selector: 'app-about-newsletter',
  imports: [FormsModule],
  templateUrl: './about-newsletter.html',
  styleUrl: './about-newsletter.css',
})
export class AboutNewsletter {

  constructor(private emailService:EmailService){}
  
  email:string = "";

  adicionarANewsletter(){

    console.log("Email: ", this.email);
    this.emailService.adicionarANewsletter(this.email);
  }

}
