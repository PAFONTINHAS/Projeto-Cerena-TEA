import { Component } from '@angular/core';
import { EmailService } from '../../../core/services/email-service/email-service';
import { Contato } from '../../../core/models/contato';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us-comp',
  imports: [FormsModule],
  templateUrl: './contact-us-comp.html',
  styleUrl: './contact-us-comp.css',
})
export class ContactUsComp {

    constructor(private emailService: EmailService){}
  
    redirectToEmail(){
      const url = 'mailto:cerenaagendamento@cerenatea.com.br';
      window.open(url, '_blank');
    }
  
    redirectToTelephone(telefone:string){
      window.open(telefone, '_blank');
    }
  
    contato : Contato = {
      nome:"",
      email:"",
      telefone:"",
      observacoes:""
    }
  
  
    enviarEmail(){  
      this.emailService.enviarEmailDuvida(this.contato);
    }
  

}
