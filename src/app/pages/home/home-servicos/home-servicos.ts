import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ServicoCard } from '../../../core/models/servicoCard';
import { RouterLink } from "@angular/router";




@Component({
  selector: 'app-home-servicos',
  imports: [RouterLink],
  templateUrl: './home-servicos.html',
  styleUrl: './home-servicos.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeServicos implements OnInit{

  servicos: ServicoCard[] = [
    {
      tituloServico: "TERAPIA OCUPACIONAL - INTEGRAÇÃO SENSORIAL",
      imagem: "images/home-terapia-ocupacional-IS.png"

    },
    {
      tituloServico: "TERAPIA OCUPACIONAL - ABA",
      imagem: "images/home-terapia-ocupacional-ABA.png"
    },
    {
      tituloServico: "FONOAUDIOLOGIA - ABA",
      imagem: "images/home-fonoaudiologia-ABA.png"

    },
    {
      tituloServico: "PSICOLOGIA",
      imagem: "images/home-psicologia-ABA.png"
    },
    {
      tituloServico: "PSICOPEDAGOGIA",
      imagem: "images/home-servico-psicopedagogia.jpg"
    },
    {
      tituloServico: "PSICOTERAPIA - ABA E TCC",
      imagem: "images/home-psicoterapia-ABA-TCC.jpg"
    }
  ]

  ngOnInit(): void {}

}
