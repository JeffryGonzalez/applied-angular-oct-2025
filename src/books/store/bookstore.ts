import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { Book } from '../bookItem';
import { httpResource } from '@angular/common/http';

export const sortByOrder = ['asc', 'desc'] as const;
export type sortBy = typeof sortByOrder;

type bookState = {
  books: Book[];
  sortOrder: sortByOrder;
};

export const BooksStore = signalStore(
  withState<bookState>({
    books: [],
    sortOrder: 'asc',
  }),
  withProps((state) => ({
    count: computed(() => state.books.length),
    books: httpResource<Book[]>(() => '/api/books'),
  })),
  withMethods((state) => ({
    setOrder(order: string) {
      patchState(state, { sortOrder: order });
    },
  })),
  //   withHooks({
  //     onInit(store) {
  //       store.load();
  //     },
  //   }),
);
