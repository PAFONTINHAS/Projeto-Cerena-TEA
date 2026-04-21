import { Component } from '@angular/core';
import { HeaderComp, NavigationRoutes } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";
import { OurServices } from "../our-services/our-services";

@Component({
  selector: 'app-services-page',
  imports: [HeaderComp, FooterComp, OurServices],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  public get navigationRoutes(): typeof NavigationRoutes{
    return NavigationRoutes;
  }
}
