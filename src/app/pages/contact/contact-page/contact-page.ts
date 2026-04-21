import { Component } from '@angular/core';
import { HeaderComp } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";
import { ContactUsComp } from "../../../shared/components/contact-us-comp/contact-us-comp";
import { ContactLocation } from '../contact-location/contact-location';
import { ContactFaq } from '../contact-faq/contact-faq';

@Component({
  selector: 'app-contact-page',
  imports: [HeaderComp, FooterComp, ContactUsComp, ContactLocation, ContactFaq],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

}
