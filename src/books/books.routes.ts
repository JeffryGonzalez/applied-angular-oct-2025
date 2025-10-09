import { Routes } from '@angular/router';
import { Books } from './books';
import { List } from './pages/list';
import { BookPreferences } from './pages/book-preferences';
export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: Books,
    children: [
      {
        path: 'booksList',
        component: List,
      },
      {
        path: 'preferences',
        component: BookPreferences,
      },
      // {
      //   path: '**',
      //   redirectTo: 'booksList',
      //   pathMatch: 'full',
      // },
    ],
  },
];
