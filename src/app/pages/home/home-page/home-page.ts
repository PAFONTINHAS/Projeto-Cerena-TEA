import { Component } from '@angular/core';
import { HeaderComp } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";
import { HomeBanner } from "../home-banner/home-banner";
import { ApoioTea } from "../apoio-tea/apoio-tea";
import { HomeServicos } from "../home-servicos/home-servicos";
import { HomeContatos } from "../home-contatos/home-contatos";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComp, FooterComp, HomeBanner, ApoioTea, HomeServicos, HomeContatos],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
