import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DespreNoiComponent } from './pages/despre-noi/despre-noi.component';
import { ServiciiComponent } from './pages/servicii/servicii.component';
import { TestimonialeComponent } from './pages/testimoniale/testimoniale.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProiecteComponent } from './components/proiecte/proiecte.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'despre', component: DespreNoiComponent },
  { path: 'servicii', component: ServiciiComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'proiecte', component: ProiecteComponent },
  { path: 'testimoniale', component: TestimonialeComponent },
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
