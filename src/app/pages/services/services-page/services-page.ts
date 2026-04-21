import { Component } from '@angular/core';
import { HeaderComp } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";

@Component({
  selector: 'app-services-page',
  imports: [HeaderComp, FooterComp],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {

}
