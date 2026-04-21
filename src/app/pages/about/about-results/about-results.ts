import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-results',
  imports: [],
  templateUrl: './about-results.html',
  styleUrl: './about-results.css',
})
export class AboutResults implements AfterViewInit{

  @ViewChild('timelineSection', {static: true})
  timelineSection!:ElementRef;
  
  resultados = [
    {
      title:"+ de 7 anos",
      desc: "de experiência"
    },
    {
      title:"100%",
      desc: "clientes satisfeitos"
    },
    {
      title: "+ de 500",
      desc: "crianças acompanhadas"
    },
    {
      title: "+ de 300",
      desc: "famílias atendidas"
    }
  ]

  isRevealed: boolean[] = [];

  hasAnimated = false;

  ngAfterViewInit(): void {
    this.isRevealed = this.resultados.map(() => false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.revealSequentially();
          observer.disconnect(); // roda só uma vez
        }
      },
      {
        threshold: 0.4 // 40% da seção visível
      }
    );

    observer.observe(this.timelineSection.nativeElement);
  }

  revealSequentially(): void {
    this.resultados.forEach((_, index) => {
      setTimeout(() => {
        this.isRevealed[index] = true;
      }, index * 900); // mantém o timing da animação
    });
  }
}


