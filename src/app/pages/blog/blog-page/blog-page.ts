import { Component } from '@angular/core';
import { HeaderComp, NavigationRoutes } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";
import { BlogSection } from "../blog-section/blog-section";

@Component({
  selector: 'app-blog-page',
  imports: [HeaderComp, FooterComp, BlogSection],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.css',
})
export class BlogPage {
  public get navigationRoutes(): typeof NavigationRoutes{
    return NavigationRoutes;
  }
}
