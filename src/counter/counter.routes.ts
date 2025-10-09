import { Routes } from '@angular/router';
import { Counter } from './counter';
import { Ui } from './pages/ui';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    children: [
      {
        path: 'ui',
        component: Ui,
      },
    ],
  },
];
