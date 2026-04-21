import { Component } from '@angular/core';
import { HeaderComp } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";
import { AboutUs } from "../about-us/about-us";
import { AboutResults } from "../about-results/about-results";
import { AboutNewsletter } from "../about-newsletter/about-newsletter";

@Component({
  selector: 'app-about-page',
  imports: [HeaderComp, FooterComp, AboutUs, AboutResults, AboutNewsletter],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {

}
