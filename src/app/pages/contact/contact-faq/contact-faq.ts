import { Component } from '@angular/core';
import { FaqQuestion } from '../../../core/models/faqQuestion';

@Component({
  selector: 'app-contact-faq',
  imports: [],
  templateUrl: './contact-faq.html',
  styleUrl: './contact-faq.css',
})
export class ContactFaq {

  FAQ: FaqQuestion[] = [

    {
      question: 'O que é uma clínica de autismo?',
      answer: `Uma clínica de autismo é um centro especializado que oferece avaliação, 
      diagnóstico e tratamento para crianças e adultos com transtorno do espectro autista (TEA). 
      Essas clínicas oferecem serviços de intervenção comportamental, terapia ocupacional, fonoaudiologia, entre outros.`,
      open: false
      
    },
    {
      question: 'Quais são os serviços oferecidos em uma clínica de autismo?',
      answer: `As clínicas de autismo oferecem uma variedade de serviços, incluindo avaliação diagnóstica, 
      intervenção comportamental intensiva (ABA), terapia ocupacional, fonoaudiologia, psicologia, psiquiatria, 
      e apoio à família. Esses serviços são adaptados para atender às necessidades específicas de cada pessoa com autismo.`,
      open: false
      
    },
    {
      question: 'Como escolher uma clínica de autismo?',
      answer: `Ao escolher uma clínica de autismo, é importante considerar a qualificação e experiência da equipe clínica, 
      os serviços oferecidos, a abordagem terapêutica adotada, a estrutura e ambiente da clínica, a proximidade geográfica, 
      e a opinião de outras famílias e profissionais da área.`,
      open: false
      
    },
    {
      question: 'Qual é a importância da intervenção precoce em uma clínica de autismo?',
      answer: `A intervenção precoce em uma clínica de autismo é crucial para maximizar o desenvolvimento e o potencial da criança. 
      Quanto mais cedo a intervenção começar, maiores são as chances de alcançar progressos significativos em áreas como linguagem, socialização e comportamento.`,
      open: false
      
    },
    {
      question: 'A terapia ABA é oferecida em clínicas de autismo?',
      answer: `Sim, muitas clínicas de autismo oferecem a terapia ABA (Análise do Comportamento Aplicada), 
      que é uma abordagem comprovada para promover habilidades sociais, habilidades de comunicação, 
      diminuir comportamentos desafiadores e melhorar a qualidade de vida de indivíduos com autismo.`,
      open: false
    },
    {
      question: 'Clínicas de autismo oferecem suporte para as famílias?',
      answer: `Sim, as clínicas de autismo frequentemente oferecem suporte para as famílias, 
      incluindo orientação sobre estratégias de manejo em casa, workshops educacionais, 
      grupos de apoio, aconselhamento familiar e acesso a recursos comunitários.`,
      open: false
      
    }

  ]

  toggleFaq(index: number) {
    // Fecha todos os outros (opcional, estilo sanfona)
    this.FAQ.forEach((item, i) => {
      if (i !== index) item.open = false;
    });
    
    // Inverte o estado do clicado
    this.FAQ[index].open = !this.FAQ[index].open;
  }
}
