import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-header-comp',
  imports: [RouterLink, MatIconModule, FontAwesomeModule],
  templateUrl: './header-comp.html',
  styleUrl: './header-comp.css',
})
export class HeaderComp {

  faInstagram = faSquareInstagram;

  redirectToTelephone(){
    const url = 'tel:(41) 99104-7046';
    window.open(url, '_blank');
  }

  redirectToEmail(){
    const url = 'mailto:cerenaagendamento@cerenatea.com.br';
    window.open(url, '_blank');
  }

  redirectToInstagram(){
    const url = 'https://instagram.com/teacerena';
    window.open(url, '_blank');
  }

  

}
