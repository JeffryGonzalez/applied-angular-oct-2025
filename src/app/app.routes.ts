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
    path: 'demos',
    loadChildren: () =>
      import('../demos/demos.routes').then((r) => r.DEMO_ROUTES),
    // This will put EVERYTHING in the demos folder into a new "chunk" - separate javascript file to be downloaded.

    // By default it is "lazy loaded" - loaded on demand. I don't really like that usually, so I'll show you how to change it.
  },
  {
    path: 'links',
    loadChildren: () =>
      import('../links/link.routes').then((l) => l.LINKS_ROUTES),
  },
  {
    path: 'links-rx',
    loadChildren: () =>
      import('../links-entities-rx/link.routes').then((l) => l.LINKS_ROUTES),
  },
  {
    path: 'counter-lab',
    loadChildren: () =>
      import('../counter-lab/counter.routes').then((l) => l.COUNTER_ROUTES),
  },
  {
    path: 'counter-lab-es',
    loadChildren: () =>
      import('../counter-lab-es/counter.routes').then((l) => l.COUNTER_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
