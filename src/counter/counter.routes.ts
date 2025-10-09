import { Routes } from '@angular/router';
import { Counter } from './counter';
import { Ui } from './pages/ui';
import { Pref } from './pages/pref';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    children: [
      {
        path: 'ui',
        component: Ui,
      },
      {
        path: 'pref',
        component: Pref,
      },
    ],
  },
];
