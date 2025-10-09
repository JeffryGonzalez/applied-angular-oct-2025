import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
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
  withProps(() => ({
    sortFields: SortFields,
  })),
  withMethods((store) => ({
    setSortBy: (field: SortField) => patchState(store, { sortBy: field }),
    toggleOrder: () =>
      patchState(store, (state) => ({ ascending: !state.ascending })),
  })),
);
