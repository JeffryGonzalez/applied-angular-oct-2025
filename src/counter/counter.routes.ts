import { Routes } from '@angular/router';
import { UniqueCounter } from './counter';
import { UniqueUi } from './pages/ui';
import { UniquePrefs } from './pages/prefs';
import { CounterStore } from './stores/counter';

export const UNIQUE_COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: UniqueCounter,
    providers: [CounterStore],
    children: [
      {
        path: 'ui',
        component: UniqueUi,
      },
      {
        path: 'prefs',
        component: UniquePrefs,
      },
    ],
  },
];
