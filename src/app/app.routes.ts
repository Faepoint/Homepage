import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/pages/general/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
