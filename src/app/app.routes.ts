import { Routes } from '@angular/router';
import { ConstructionComponent } from './components/pages/construction/construction.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NotFoundComponent } from './components/pages/general/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'under-construction',
    component: ConstructionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
