import { Component } from '@angular/core';
import { BlogArticle } from '../../../core/models/blogArticle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  imports: [],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css',
})
export class BlogSection {

  constructor(private router: Router){}

  verArtigo(article: BlogArticle){
    const titleSlug = article.title.toLocaleLowerCase().replace(/ /g, '-');

    this.router.navigate(['/blog', titleSlug], {
      state: {data:article}
    });
  }

  articles: BlogArticle[] = [
    {
      title: "Como identificar sinais de autismo na infância",
      readingTime: "3 minutos",
      summary: `Desenvolva habilidades para identificar e intervir precocemente em possíveis sinais de autismo em crianças, 
                promovendo um desenvolvimento saudável e integrado na primeira infância.`,
      content:[
        {
          text: `
            O autismo é um distúrbio neurobiológico que afeta a capacidade de comunicação, 
            interação social e comportamentos repetitivos. Ele pode ser identificado desde cedo, 
            geralmente durante a infância. No entanto, é importante lembrar que cada criança é única e pode apresentar sinais diferentes. 
            Neste artigo, abordaremos quatro sinais comuns de autismo na infância para ajudá-lo a reconhecer possíveis comportamentos preocupantes.
          `
        },
        {
          subTitle: "Comportamentos repetitivos e limitação de interesses",
          text: `
            Os comportamentos repetitivos e a limitação de interesses são um dos principais sinais de autismo na infância. 
            Crianças com autismo tendem a se envolver em padrões repetitivos de comportamento, como bater as mãos ou balançar o corpo, 
            e têm interesses restritos e intensos, como por exemplo memorizar nomes de marcas ou objetos. 
            Além disso, elas podem ter dificuldade em entender e se adaptar a novas situações, preferindo sempre seguir uma rotina bem definida.
          `
        },
        {
          subTitle: "Interpretação literal e dificuldade com metáforas",
          text: `Outro sinal comum de autismo é a interpretação literal do mundo. 
          Crianças com autismo tendem a ter dificuldades em entender metáforas, piadas e expressões idiomáticas, interpretando tudo de forma literal.`
        }
      ]
    },


    {
      readingTime:"1 minuto",
      title:"O autismo se manifesta diferente em meninas?",
      summary: `
        Você já percebeu que o autismo parece se manifestar de maneira diferente em meninas? 
        Meninas com autismo tendem a apresentar habilidades de comunicação mais desenvolvidas em comparação com meninos na mesma condição.
      `,
      content:[
        {
          text: `
            Meninas com autismo tendem a apresentar habilidades de comunicação mais desenvolvidas em comparação com meninos na mesma condição.
            Elas podem se esforçar para mascarar seus desafios sociais, 
            imitando comportamentos sociais típicos, o que pode levar à chamada “máscara social”
            Além disso, muitas meninas demonstram interesses e padrões de comportamento que são considerados mais “socialmente aceitos”.
            Ou seja, em vez de se concentrarem em tópicos restritos e específicos, como é comum em meninos, 
            elas porem demonstrar uma maior amplitude de interesses.
            Enquanto os meninos frequentemente têm sensibilidades sensoriais mais pronunciadas, 
            as meninas podem desenvolver estratégias para lidar com isso de forma discreta. 
            Ainda assim, reforçamos que cada indivíduo é único e o espectro autista abrange muitas experiências.
            O importante é promover um ambiente inclusivo e acolhedor para todas as pessoas.`
        }

      ]

    }

  ]



}
