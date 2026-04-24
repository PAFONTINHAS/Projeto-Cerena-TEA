import { Component} from '@angular/core';
import { BlogArticle } from '../../../core/models/blogArticle';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-article-section',
  imports: [],
  templateUrl: './blog-article-section.html',
  styleUrl: './blog-article-section.css',
})
export class BlogArticleSection {

  article!:BlogArticle;

  constructor(private router: Router, private location: Location){
    const navigation = this.router.currentNavigation();

    this.article = navigation?.extras.state?.['data'];
  }

  ngOnInit():void{
    if(!this.article){
      this.router.navigate(['/blog']);
    }
  }

  voltar(){
    this.location.back();
  }





}
