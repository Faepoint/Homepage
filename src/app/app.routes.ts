import { Routes } from '@angular/router';
import { ConstructionComponent } from './components/pages/construction/construction.component';
import { NotFoundComponent } from './components/pages/general/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TemplatesComponent } from './components/pages/templates/templates.component';

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
    path: 'templates',
    component: TemplatesComponent
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
