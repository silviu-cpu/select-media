import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DespreNoiComponent } from './pages/despre-noi/despre-noi.component';
import { ServiciiComponent } from './pages/servicii/servicii.component';
import { TestimonialeComponent } from './pages/testimoniale/testimoniale.component';
import { PortofoliuComponent } from './pages/portofoliu/portofoliu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { CreatorComponent } from './components/creator/creator.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeroSectionComponent,
    ContactComponent,
    HomepageComponent,
    DespreNoiComponent,
    ServiciiComponent,
    TestimonialeComponent,
    PortofoliuComponent,
    NotFoundComponent,
    ContactComponentComponent,
    CreatorComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
