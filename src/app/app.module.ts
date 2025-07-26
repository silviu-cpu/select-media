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
import { ConnectComponent } from './components/connect/connect.component';
import { FormsModule } from '@angular/forms';
import { ProiecteComponent } from './components/proiecte/proiecte.component';
import { ProcesComponent } from './components/proces/proces.component';

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
    ConnectComponent,
    ProiecteComponent,
    ProcesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
