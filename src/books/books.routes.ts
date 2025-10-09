import { Routes } from '@angular/router';
import { Books } from './books';
import { List } from './pages/list';
import Statistics from './components/statistics';
import { BooksStore } from './stores/books';
export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: Books,
    providers: [BooksStore],
    children: [
      {
        path: 'list',
        component: List,
      },
      {
        path: 'statistics',
        component: Statistics,
      },
    ],
  },
];
