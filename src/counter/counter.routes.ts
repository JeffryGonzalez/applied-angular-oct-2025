import { Routes } from '@angular/router';
import { Counter } from './counter';
import { CounterUI } from './pages/ui';
import { CounterStore } from './stores/counter';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    providers: [CounterStore],

    children: [
      {
        path: 'ui',
        component: CounterUI,
      },
    ],
  },
];
