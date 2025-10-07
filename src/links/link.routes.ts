import { Routes } from '@angular/router';
import { Links } from './links';
import { List } from './components/list';
import { Prefs } from './components/prefs';
export const LINKS_ROUTES: Routes = [
  {
    path: '',
    component: Links,
    children: [
      {
        path: 'list',
        component: List,
      },
      {
        path: 'prefs',
        component: Prefs,
      },
    ],
  },
];
