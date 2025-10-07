import {
  patchState,
  signalStore,
  watchState,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { SortingOptions } from '../types';

type LinksState = {
  sortingBy: SortingOptions;
};
export const LinksStore = signalStore(
  withState<LinksState>({
    sortingBy: 'NewestFirst',
  }),
  withMethods((state) => {
    return {
      changeSortOrder: (sortingBy: SortingOptions) =>
        patchState(state, { sortingBy }),
    };
  }),
  withHooks({
    onInit(store) {
      const savedSortOption = localStorage.getItem('sort-order');
      if (savedSortOption !== null) {
        store.changeSortOrder(savedSortOption as SortingOptions);
      }
      watchState(store, ({ sortingBy }) => {
        localStorage.setItem('sort-order', sortingBy);
      });
    },
  }),
);
