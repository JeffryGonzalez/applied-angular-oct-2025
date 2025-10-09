import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { ApiBookItem, SortingOptions } from '../types';

import { httpResource } from '@angular/common/http';
import { computed } from '@angular/core';

type BooksState = {
  sortingBy: SortingOptions;
};
export const BooksStore = signalStore(
  withState<BooksState>({
    sortingBy: 'NewestFirst',
  }),

  withProps(() => ({
    BooksResource: httpResource<ApiBookItem[]>(() => ({
      url: 'https://api.some-fake-server.com/books',
    })),
  })),
  withComputed((store) => {
    return {
      getNumberOfBooks: computed(
        () => store.BooksResource.value()?.length || 0,
      ),
    };
  }),
  withMethods((state) => {
    return {
      changeSortOrder: (sortingBy: SortingOptions) =>
        patchState(state, { sortingBy }),
    };
  }),
  withHooks({
    onInit(store) {
      setInterval(() => store.BooksResource.reload(), 5000); // polling
      const savedSortOption = localStorage.getItem('book-sort-order');
      if (savedSortOption !== null) {
        store.changeSortOrder(savedSortOption as SortingOptions);
      }
      watchState(store, ({ sortingBy }) => {
        localStorage.setItem('book-sort-order', sortingBy);
      });
    },
  }),
);
