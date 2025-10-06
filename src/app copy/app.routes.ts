import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard';
import { Support } from './pages/support';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'support',
    component: Support,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
