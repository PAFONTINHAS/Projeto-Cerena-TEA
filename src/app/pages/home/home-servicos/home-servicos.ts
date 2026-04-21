import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ServicoCard } from '../../../core/models/servicoCard';




@Component({
  selector: 'app-home-servicos',
  imports: [],
  templateUrl: './home-servicos.html',
  styleUrl: './home-servicos.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeServicos implements OnInit{

  servicos: ServicoCard[] = [
    {
      tituloServico: "TERAPIA OCUPACIONAL - INTEGRAÇÃO SENSORIAL",
      imagem: "images/terapia-ocupacional-IS.png"

    },
    {
      tituloServico: "TERAPIA OCUPACIONAL - ABA",
      imagem: "images/terapia-ocupacional-ABA.png"
    },
    {
      tituloServico: "FONOAUDIOLOGIA - ABA",
      imagem: "images/fonoaudiologia-ABA.png"

    },
    {
      tituloServico: "PSICOLOGIA",
      imagem: "images/psicologia-ABA.png"
    },
    {
      tituloServico: "PSICOPEDAGOGIA",
      imagem: "images/psicopedagogia.jpg"
    },
    {
      tituloServico: "PSICOTERAPIA - ABA E TCC",
      imagem: "images/psicoterapia-ABA-TCC.jpg"
    }
  ]

  ngOnInit(): void {}

}
