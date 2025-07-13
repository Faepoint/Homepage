import { Routes } from '@angular/router';
import { ConstructionComponent } from './components/pages/construction/construction.component';
import { NotFoundComponent } from './components/pages/general/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';

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
    path: '**',
    component: NotFoundComponent
  }
];
