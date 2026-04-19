import { Component } from '@angular/core';
import { HeaderComp } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComp, FooterComp],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
