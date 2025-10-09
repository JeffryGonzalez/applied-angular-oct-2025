import { httpResource } from '@angular/common/http';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import { ApiBookItem } from '../types';
import { withSelectedBook } from './selectedbook';
export const SortFields = ['title', 'author', 'year', 'pages'] as const;
type SortField = (typeof SortFields)[number];
type BooksState = {
  sortBy: SortField;
  ascending: boolean;
};
export const BooksStore = signalStore(
  withState<BooksState>({
    sortBy: 'title',
    ascending: true,
  }),
  withSelectedBook(),
  withProps(() => ({
    sortFields: SortFields,
    books: httpResource<ApiBookItem[]>(() => '/api/books'),
  })),
  withMethods((store) => ({
    setSortBy: (field: SortField) => patchState(store, { sortBy: field }),
    toggleOrder: () =>
      patchState(store, (state) => ({ ascending: !state.ascending })),
  })),
  withComputed((store) => ({
    getSelectedBook: computed(() => {
      const selectedBookId = store.selectedBookId();
      const selectedBook =
        store.books.value()?.find((b) => b.id === selectedBookId) || null;
      return selectedBook;
    }),
  })),
);
