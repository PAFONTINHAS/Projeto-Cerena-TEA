import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

export enum NavigationRoutes{
  INICIO,
  SOBRE_NOS,
  SERVICOS,
  CONTATO,
  BLOG
}

@Component({
  selector: 'app-header-comp',
  imports: [RouterLink, MatIconModule, FontAwesomeModule],
  templateUrl: './header-comp.html',
  styleUrl: './header-comp.css',
})
export class HeaderComp implements OnInit{

  @Input() navigationRoute: NavigationRoutes | undefined;

  public get navigationRoutes(): typeof NavigationRoutes{
    return NavigationRoutes;
  }
  
  currentRoute: NavigationRoutes = NavigationRoutes.INICIO;
  
  isMenuOpen = false;

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  ngOnInit(): void {
    if(!this.navigationRoute) return;

    this.currentRoute = this.navigationRoute; 
  }

  selectRoute(route:NavigationRoutes){
    this.currentRoute = route; 
  }

  isThisRouteSelected (route:NavigationRoutes): boolean{
    return route === this.currentRoute;
  }

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
