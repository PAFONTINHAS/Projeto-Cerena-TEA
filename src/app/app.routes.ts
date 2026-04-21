import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page/home-page';
import { AboutPage } from './pages/about/about-page/about-page';
import { ServicesPage } from './pages/services/services-page/services-page';
import { ContactPage } from './pages/contact/contact-page/contact-page';
import { BlogPage } from './pages/blog/blog-page/blog-page';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomePage},
    {path: 'sobre-nos', component: AboutPage},
    {path: 'servicos', component: ServicesPage},
    {path: 'entre-em-contato-conosco', component: ContactPage},
    {path: 'blog', component: BlogPage},
];
