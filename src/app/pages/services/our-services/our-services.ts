import { Component } from '@angular/core';
import { ServicoCard } from '../../../core/models/servicoCard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css',
})
export class OurServices {

  servicos: ServicoCard[] = [
    {
      tituloServico: "TERAPIA OCUPACIONAL - INTEGRAÇÃO SENSORIAL",
      descricao: `A Terapia Ocupacional com enfoque em Integração Sensorial busca ajudar a criança a compreender e organizar melhor os estímulos do ambiente. 
      Por meio de atividades planejadas, trabalha-se o equilíbrio, a coordenação motora, o tato, a audição e outros sentidos, promovendo maior autonomia, 
      adaptação às rotinas e qualidade de vida.`,
      imagem: "images/terapia-ocupacional-IS.png"

    },
    {
      tituloServico: "TERAPIA OCUPACIONAL - ABA",
      descricao: `Na Terapia Ocupacional com base na Análise do Comportamento Aplicada (ABA), 
      o objetivo é favorecer a independência funcional da criança no dia a dia. São desenvolvidas habilidades motoras, 
      cognitivas e sociais, sempre adaptadas às necessidades individuais, de forma estruturada e positiva, 
      para ampliar o repertório de comportamentos adequados e reduzir barreiras à participação social.`,
      imagem: "images/terapia-ocupacional-ABA.png"
    },
    {
      tituloServico: "FONOAUDIOLOGIA - ABA",
      descricao: `A Fonoaudiologia aplicada à metodologia ABA trabalha aspectos fundamentais da comunicação, 
      linguagem e alimentação. Por meio de estratégias baseadas em evidências científicas, busca-se estimular a fala, a compreensão, 
      a interação social e o uso funcional da linguagem, oferecendo recursos para que a criança se comunique de maneira mais eficaz em diferentes contextos.`,
      imagem: "images/fonoaudiologia-ABA.png"

    },
    {
      tituloServico: "PSICOLOGIA",
      descricao: `A Psicologia com abordagem ABA atua no desenvolvimento emocional e comportamental da criança. 
      O trabalho é direcionado à promoção de habilidades sociais, regulação emocional e resolução de desafios comportamentais, 
      sempre considerando o contexto familiar e escolar. O foco é apoiar a criança em seu desenvolvimento integral, fortalecendo sua autoestima e bem-estar.`,
      imagem: "images/psicologia-ABA.png"
    },
    {
      tituloServico: "PSICOPEDAGOGIA",
      descricao: `A Psicopedagogia tem como foco identificar e intervir nas dificuldades de aprendizagem. 
      Por meio de estratégias lúdicas e personalizadas, busca-se compreender o processo de aprender de cada criança, 
      fortalecendo suas potencialidades e auxiliando na superação de obstáculos que possam estar interferindo no desempenho escolar e no desenvolvimento cognitivo.`,
      imagem: "images/psicopedagogia.jpg"
    },
    {
      tituloServico: "PSICOTERAPIA - ABA E TCC",
      descricao: `A Psicoterapia com base na ABA e na Terapia Cognitivo-Comportamental (TCC) integra técnicas que ajudam a criança a lidar com emoções, 
      comportamentos e pensamentos de maneira mais saudável. O trabalho é voltado para o desenvolvimento da autonomia emocional, 
      autorregulação e enfrentamento de situações do cotidiano, sempre respeitando as necessidades individuais e promovendo qualidade de vida.`,
      imagem: "images/servico-psicoterapia.jpg"
    }
  ]

  servicoSelecionado: ServicoCard = this.servicos[0];

  selecionarServico(servico: ServicoCard): void {
    this.servicoSelecionado = servico;
  }

  trackByTitulo(index: number, item: ServicoCard): string {
    return item.tituloServico;
  }


}
