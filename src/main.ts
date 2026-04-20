import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {register as registerSwiperElements} from 'swiper/element/bundle';
registerSwiperElements(); //Registra os componentes do Swiper globalmente

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
