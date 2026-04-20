import { Component } from '@angular/core';
import {NgxMaskDirective} from "ngx-mask"
import { EmailService } from '../../../core/services/email-service/email-service';
import { Contato } from '../../../core/models/contato';
import { FormGroup, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home-contatos',
  imports: [NgxMaskDirective, FormsModule],
  templateUrl: './home-contatos.html',
  styleUrl: './home-contatos.css',
})
export class HomeContatos {

  constructor(private emailService: EmailService){}

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
