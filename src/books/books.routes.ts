import { Routes } from '@angular/router';
import { Books } from './books';
import { Book } from './pages/book';
export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: Books,
    children: [
      {
        path: 'Books',
        component: Book,
      },
    ],
  },
];
