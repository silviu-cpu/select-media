import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DespreNoiComponent } from './pages/despre-noi/despre-noi.component';
import { ServiciiComponent } from './pages/servicii/servicii.component';
import { TestimonialeComponent } from './pages/testimoniale/testimoniale.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProiecteComponent } from './components/proiecte/proiecte.component';
import { ProiecteFotoComponent } from './pages/proiecte-foto/proiecte-foto.component';
import { ProiecteVideoComponent } from './pages/proiecte-video/proiecte-video.component';
import { TurVirtualComponent } from './pages/tur-virtual/tur-virtual.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { CampaniiElectoraleComponent } from './pages/campanii-electorale/campanii-electorale.component';
import { ColaborariArtistiComponent } from './pages/colaborari-artisti/colaborari-artisti.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'despre', component: DespreNoiComponent },
  { path: 'servicii', component: ServiciiComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'proiecte', component: ProiecteComponent },
  { path: 'testimoniale', component: TestimonialeComponent },
  { path: 'proiecte-foto', component: ProiecteFotoComponent },
  { path: 'proiecte-video', component: ProiecteVideoComponent },
  { path: 'proiecte-tur-virtual', component: TurVirtualComponent },
  { path: 'proiecte-social-media', component: SocialMediaComponent },
  { path: 'proiecte-campanii', component: CampaniiElectoraleComponent },
  { path: 'proiecte-artisti', component: ColaborariArtistiComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
