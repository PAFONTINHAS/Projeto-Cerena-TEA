import { Component } from '@angular/core';
import { HeaderComp, NavigationRoutes } from "../../../shared/components/header-comp/header-comp";
import { FooterComp } from "../../../shared/components/footer-comp/footer-comp";

@Component({
  selector: 'app-blog-page',
  imports: [HeaderComp, FooterComp],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.css',
})
export class BlogPage {
  public get navigationRoutes(): typeof NavigationRoutes{
    return NavigationRoutes;
  }
}
