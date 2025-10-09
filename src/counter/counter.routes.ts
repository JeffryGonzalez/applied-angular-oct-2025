import { Routes } from '@angular/router';
import { Counter } from './counter';
import { Ui } from './pages/ui';
import { CounterStore } from './store/counter-store';
import { Prefs } from './pages/prefs';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    providers: [CounterStore],
    children: [
      {
        path: 'ui',
        component: Ui,
      },
      {
        path: 'prefs',
        component: Prefs,
      },
    ],
  },
];
